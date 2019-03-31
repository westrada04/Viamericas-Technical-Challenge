import React, { Component } from 'react'
import './Login.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import LoginService from '../../../Services/LoginService';

class Login extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: "",
            password: "",
            options: this.props.data.childProps
        };
    }

    login = (payload) => {
        LoginService.login(payload).then(
            response => {
                if (response.status != undefined && response.status == 'success') {
                    sessionStorage.setItem('token', response.id_token);
                    this.state.childProps.userHasAuthenticated(true);
                } else {
                    console.log('response.errorMessage', response.errorMessage);
                }
            }
        ).catch(
            error => {
                console.log("err => ", error);
            }
        )
    }

    validateForm(event) {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();

        let payload = {
            "username": this.state.username,
            "password": this.state.password
        };
        this.login(payload);
    }

    render() {
        return (
            <Card border="primary">
                <Card.Body>
                    <Card.Title className="text-center">Log In</Card.Title>
                    <Form noValidate onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="text" placeholder="Enter username" onChange={(event) => this.setState({ username: event.target.value })} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Username.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Password.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={!this.validateForm()}>
                            log in ejemplo
                        </Button>
                    </Form>
                    <Alert variant="danger">
                        This is a alerta check it out!
                </Alert>
                </Card.Body>
            </Card>
        );
    }
}

export default Login;