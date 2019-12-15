import * as React from "react";
import * as ReactDOM from "react-dom";
import {TextField} from '@material-ui/core';

interface Props{
    onSubmit: () => void;
}

const LoginForm: React.FC<Props> = () => {
    return (<TextField/>);

}
export default LoginForm