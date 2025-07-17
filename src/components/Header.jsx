import { useContext } from "react";
import { CurrentUserContext } from "../App";

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
                    <li><a href="/">Home</a></li>
                    <li><a href="/my-blogs">My Blogs</a></li>
                    <li><a href="/blogs/write">Write</a></li>
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