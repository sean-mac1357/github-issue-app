import React from 'react';
import Dashboard from './Dashboard';
import ReactMardown from 'react-markdown/with-html';


const IssueCard = (props) => {
    const { issue } = props;
    return (
            <div className="Content">
                <h2>
                    <a href={issue.url}>
                        {issue.title}
                    </a>
                </h2>
                <p className="Paragraph">
                    {issue.body}
                </p>
            </div>
    )
}

export default IssueCard;