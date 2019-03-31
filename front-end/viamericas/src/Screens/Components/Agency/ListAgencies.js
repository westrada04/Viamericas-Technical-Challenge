import React, { Component } from 'react'
import './ListAgencies.css';
import Table from 'react-bootstrap/Table';

function itemDanger(status) {
    if (status === 'Closed') {
        return 'table-danger';
    } else {
        return '';
    }
}

class ListAgencies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        }

        this.compareBy.bind(this);
        this.sortBy.bind(this);
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.props.data];
        arrayCopy.sort(this.compareBy(key));
        this.setState({ data: arrayCopy });
    }

    render() {
        const { data } = this.state;

        return (
            <Table responsive="sm" bordered hover size="sm" className="Agencies-table text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th onClick={() => this.sortBy('id')}>Id</th>
                        <th onClick={() => this.sortBy('name')}>Name</th>
                        <th onClick={() => this.sortBy('status')}>Status</th>
                        <th onClick={() => this.sortBy('state')}>State</th>
                        <th onClick={() => this.sortBy('state')}>City</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((agency, index) => {
                        return (
                            <tr key={index} className={itemDanger(agency.status)}>
                                <td>{index + 1}</td>
                                <td>{agency.id}</td>
                                <td>{agency.name}</td>
                                <td>{agency.status}</td>
                                <td>{agency.state}</td>
                                <td>{agency.city}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default ListAgencies;