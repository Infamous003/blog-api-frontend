import { useContext } from "react";
import { CurrentUserContext } from "../App";


export default function Blog({ title, subtitle, date, content }) {
    const {currentUser} = useContext(CurrentUserContext);

    return (
    <>
        <div className="column .grid-container">
            <h1 className="blog-title">{ title }</h1>
            <h4 className="blog-subtitle">{ subtitle }</h4>
            <p className="blog-content">{ content }</p>
        </div>
    </>)
}