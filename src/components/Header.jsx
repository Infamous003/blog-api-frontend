import { useContext } from "react";
import { CurrentUserContext } from "../App";
import { Link } from "react-router-dom";

import Form from "./Form";

function Header() {

    const {currentUser} = useContext(CurrentUserContext);
    // The userContext above will return currentUser and setCurrentUser, but we only need the former
    return (<>
        <header box-="square" shear-="top">
            <div className="box-heading">
                <span>MaBlog</span>
            </div>
            
            <nav>
                <ul marker-="open tree">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/my-blogs">My Blogs</Link></li>
                    <li><Link to="/blogs/write">Write</Link></li>
                </ul>
            </nav>

            <Form/>
            { currentUser && 
                <p>&gt;Logged in as <b>@{ currentUser }</b></p>
            }
        </header>
    </>)
}

export default Header;