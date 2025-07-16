import { useContext } from "react";
import { CurrentUserContext } from "../App";


export default function Blog({ title, subtitle, date, content, username }) {
    const {currentUser} = useContext(CurrentUserContext);

    return (
    <>
        <div className="column .grid-container blog-container">
            <div className="blog-meta-data">
                <h1 className="blog-title">{ title }</h1>
                <h4 className="blog-subtitle">{ subtitle }</h4>
                <p className="blog-username"><span className="username blog-username">@{ username }</span>, Dec 2023</p>
            </div>
            <hr className="divider" />
            <p className="blog-content">{ content }</p>
        </div>
    </>)
}