import * as React from "react";
import { Field, reduxForm, WrappedFieldProps } from "redux-form";
import Header from "semantic-ui-react/dist/es/elements/Header";
import Dropdown from "semantic-ui-react/dist/es/modules/Dropdown";

import DefaultLanguageInput from "./defaultlanguageinput";
import LanguageDropdownInput from "./languagedropdowninput";


const LanguageSettings = (props: {}) => (
  <div>
    <Header dividing={true}>
      Highlight Languages
    </Header>
    <Field
      name="languages"
      component={LanguageDropdownInput}
      style={{ marginBottom: "1em" }}
    />

    <Field
      name="defaultlanguage"
      component={DefaultLanguageInput as any}
    />
  </div>
);

export default LanguageSettings;
