import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import './login.css';
import axios from 'axios';


export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

     function handleSubmit(event) {
        event.preventDefault();
        const response =  loginUser({userName : email,password});
        console.log(response);
        /// buraada apiye gideceğiz
    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    )
}


 function loginUser(credentials) {
    const userLoginDto = {
        userName: credentials.userName,
        password: credentials.password,
      };
      console.log('Data ',JSON.stringify(userLoginDto));
    axios.post(`http://localhost:3033/user/login`,  
                                                    userLoginDto
    )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
   }