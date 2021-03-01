import React, { Component } from "react";
import Modal from './Modal';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>put issue body here</p>
                </Modal>
                <button type="button" onClick={this.showModal}>
                    Read More
                </button>
            </main>
        );
    }
}

export default Dashboard;