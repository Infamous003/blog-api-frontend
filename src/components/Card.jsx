import { Link } from "react-router-dom";
import { deletePost } from "../utils";

function Card({ title, subtitle, author, id, isLoggedIn=false, posts, setPosts }) {
    const formattedDate = new Date().toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric"
                            });
    
    function handleDeleteBtnClick(id) {
        deletePost(id, posts, setPosts);
    }
    
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
                <Link className="read-more-btn" to={`/blogs/${id}`}>
                    Read more
                </Link>

                { isLoggedIn && 
                    <button onClick={() => handleDeleteBtnClick(id)} className="delete-btn" size-="small">
                        Delete
                    </button>
                }
            </span>
        </div>
    </>)
}


export default Card;