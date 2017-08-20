import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { Button, Popup } from "semantic-ui-react";

import { getFileByIndexDefault, IFileByIndexPropsType } from "../../helpers/fileprops";
import { IReducer } from "../../reducers/index";


class DownloadFileButton extends React.Component<IFileByIndexPropsType, undefined> {
  public render() {
    if (this.props.file.isNothing()) {
      return null;
    }

    return (
      <div>
        <Popup
          basic={true}
          trigger={
          <a
            href={this.props.file.getData().base64DownloadString()}
            download={this.props.file.getData().name}
          >
            <Button icon="download" link={true} />
          </a>
          }
          content="Download this file"
        />
      </div>
    );
  }
}

export default connect(getFileByIndexDefault, () => ({}))(DownloadFileButton);