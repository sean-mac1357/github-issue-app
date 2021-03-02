// import Dashboard from './Dashboard';
import ReactMarkdown from 'react-markdown/with-html';

const IssueCard = (props) => {
    const { issue } = props;
    return (
            <li className="Content">
                <h2>
                    <a href={issue.url}>
                        {issue.title}
                    </a>
                </h2>
                <div className="Paragraph">
                <ReactMarkdown children={issue.body} />
                </div>
                
            </li>
    )
}

export default IssueCard;