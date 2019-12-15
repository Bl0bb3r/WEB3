import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as React from "react";

interface LoginValues{
    Email: string;
    Password: string;
}

interface Props{
    onSubmit: (values: LoginValues) => void;
}
//inspired by https://www.youtube.com/watch?v=6VmVYi9yrAA
const LoginForm: React.FC<Props> = ({onSubmit}) => {
    return (
    <Formik initialValues ={{Email:"", Password: ""}}
     onSubmit={values =>{
        onSubmit(values);
    }}>
    {({values, handleChange, handleBlur}) =>(
        <Form>
            <div>
                <TextField
                    name="Email" 
                    value = {values.Email} 
                    onChange={handleChange} 
                    onBlur = {handleBlur}
                    placeholder = "Email"
                />
            </div>
            <br/>
            <div>
                <TextField 
                name="Password"
                value = {values.Password}
                onChange={handleChange} 
                onBlur = {handleBlur}
                type = "password"
                placeholder = "password"
                />
            </div>
            <br/>
            <Button type="submit">Login</Button>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </Form>
    )}
    </Formik>
    );

}
export default LoginForm