import React, { Component } from 'react'

export default class TvcCompA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Chung Trịnh",
        };
    }

    render() {
        return (
            <div>
                <h2>TvcCompA</h2>
                <p> Dữ liệu trong state: {this.state.name}</p>
                <h3> Hiển thị dữ liệu từ props</h3>
                <p>Name: {this.props.tvcName}</p>
                <p>Address: {this.props.tvcAddress}</p>
            </div>
        )
    }
}