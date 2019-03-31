import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import LoginService from '../../Services/LoginService';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: "",
            password: "",
            show: false,
            errorMessage: ""
        };
    }

    componentDidMount = () => {
        if (this.props.childProps.isAuthenticated) {
            this.props.history.push("/agencies");
        }
    }

    login = (payload) => {
        LoginService.login(payload).then(
            response => {
                if (response.status !== undefined && response.status === 'success') {
                    sessionStorage.setItem('token', response.id_token);
                    this.props.childProps.userHasAuthenticated(true);
                    this.props.history.push("/agencies");
                } else {
                    this.setState({ show: true, errorMessage: response.errorMessage });
                }
            }
        ).catch(
            error => {
                console.log("err => ", error);
                this.setState({ show: true, errorMessage: "Error en Login" });
            }
        )
    }

    validateForm(event) {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ show: false, errorMessage: "" });

        let payload = {
            "username": this.state.username,
            "password": this.state.password
        };
        this.login(payload);
    }

    render() {
        return (
            <section className="login-layout">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card border="primary">
                            <Card.Body>
                                <Alert show={this.state.show} variant="danger">
                                    <h6 className="text-center">{this.state.errorMessage}</h6>
                                </Alert>
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
                                    <Button variant="primary" type="submit" disabled={!this.validateForm()}>log in</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default LoginContainer;