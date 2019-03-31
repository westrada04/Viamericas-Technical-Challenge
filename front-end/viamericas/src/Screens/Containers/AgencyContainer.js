import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListAgencies from "../Components/Agency/ListAgencies";
import AgencyService from '../../Services/AgencyService';
import { withRouter } from 'react-router';

class AgencyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { agencies: [] }
    }

    componentDidMount = () => {
        if (this.props.childProps.isAuthenticated) {
            this.getAllAgencies();
        } else {
            this.props.history.push("/");
        }
    }

    getAllAgencies = () => {
        AgencyService.getAll()
            .then(
                agencies => this.setState({
                    agencies: agencies,
                })
            )
            .catch(
                err => console.log("Ocurrió un error", err)
            )
    }

    render() {
        if (this.state.agencies.length > 0) {
            return (
                <section className="agency-layout">
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <h1 className="text-center">List of Agencies</h1>
                            <ListAgencies data={this.state.agencies} />
                        </Col>
                    </Row>
                </section>
            );
        } else {
            return <h3 className="text-center">Loading agencies ...</h3>
        }
    }
}

export default withRouter(AgencyContainer);