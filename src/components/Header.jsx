import { useState } from "react";

import Form from "./Form";

function Header() {

    const [loggedInUser, setLoggedInUser] = useState(null);

    return (<>
        <header box-="square" shear-="top">
            <div className="box-heading">
                <span>MaBlog</span>
            </div>
            
            <nav>
                <ul marker-="open tree">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Blogs</a></li>
                    <li><a href="#">Write</a></li>
                </ul>
            </nav>

            <Form setCurrentUser={setLoggedInUser} />
            { loggedInUser && 
                <p>&gt;Logged in as <b>@{ loggedInUser }</b></p>
            }
        </header>
    </>)
}

export default Header;