import { populateDefaults } from './util'
import _ from 'lodash'

type SecuritySettingsT = {
  keysize: number
};

type SettingsT = {
  theme: string,
  security: SecuritySettingsT
};

const defaults: SettingsT = {
  theme: 'obsidian.css',
  security: {
    keysize: 32
  }
};

class SecuritySettings {
  private _settings: SecuritySettingsT;
  private _write: () => void;

  constructor(settings: SecuritySettingsT, writecb: () => void) {
    this._settings = settings;
    this._write = writecb;
  }

  public get keysize() {
    return this._settings.keysize;
  }

  public set keysize(value: number) {
    this._settings.keysize = value;
    this._write();
  }
};

export default class Settings {
  private _settings: SettingsT;
  private _security: SecuritySettings;
  private _write: () => void;

  constructor($: any) {
    let cookie = $.pgwCookie({
      'name': 'settings',
      'json': true
    });

    // debounce calls to prevent sliders from setting the cookie hundreds of times
    this._write = _.debounce(() => {
      $.pgwCookie({
        'name': 'settings',
        'value': this._settings,
        'json': true
      });
    }, 250, { trailing: true });

    if(!cookie) {
      this._settings = (<any>Object).assign({}, defaults);
      this._write();
    } else {
      this._settings = populateDefaults(cookie, defaults);
    }

    this._security = new SecuritySettings(this._settings.security, this._write);
  }

  public get security(): SecuritySettings {
    return this._security;
  }

  public get theme(): string {
    return this._settings.theme;
  }

  public set theme(value: string) {
    this._settings.theme = value;
    this._write();
  }
}
