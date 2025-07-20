import { Link } from "react-router-dom";

function Card({ title, subtitle, author, id, isLoggedIn=false, onDelete }) {
    const formattedDate = new Date().toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric"
                            });
    
    return (<>
        <div box-="square" className="row">
            <div className="user-profile-container">
                <span is-="badge" cap-="triangle" variant-="aqua" className="username">
                    <b>@{author}</b>
                </span>
                <span className="date">Posted on {formattedDate}</span>
            </div>
            <div is-="separator" direction-="y" cap-="bisect"></div>
            <span className="post-meta-container">
                <h3 is-="typography-block">{ title }</h3>
                <p className="post-subtitle">{ subtitle }</p>
                <br />

                { isLoggedIn ?
                    <div className="btns-container">
                        <Link to={`/blogs/update/${id}`} className="edit-btn" size-="small">Edit</Link> 
                        <button onClick={onDelete}
                                popoverTarget="dialog"
                                className="delete-btn"
                                size-="small">
                            Delete
                        </button>
                    </div> : 
                    
                    <div className="btns-container">
                        <Link className="read-more-btn" to={`/blogs/${id}`}>
                            Read more
                        </Link>
                    </div>
                }
            </span>
        </div>
    </>)
}


export default Card;