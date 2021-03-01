import React, { Component } from 'react';
import IssueCard from './IssueCard';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issueData: [],
        }
    }

    _loadData = async () => {
        const data = await fetch('https://api.github.com/repos/facebook/create-react-app/issues').then(response => response.json());
        return data;
    }

    async componentDidMount() {
        const apiData = await this._loadData();
        this.setState({
            issueData: apiData,
        });
    }

    render() {
        const { issueData } = this.state;
        return(
            <>
                {!!issueData.length ? (
                    issueData.map((issue, index) => {
                        return <IssueCard issue={issue} key={index} />
                    })
                ) : (
                    <p>Loading Issue Data</p>
                )}
            </>
        );
    }

}

export default IssueList;