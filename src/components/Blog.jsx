import ReactMarkdown from "react-markdown";

export default function Blog({ title, subtitle, date, content, username }) {
    return (
    <>
        <div className="column .grid-container blog-container">
            <div className="blog-meta-data">
                <h1 className="blog-title">{ title }</h1>
                <h4 className="blog-subtitle">{ subtitle }</h4>
                <p className="blog-username"><span className="username blog-username">@{ username }</span>, { date }</p>
            </div>
            <hr className="divider" />
            <div className="blog-content">
                <ReactMarkdown>
                    { content }
                </ReactMarkdown>
            </div>
        </div>
    </>)
}