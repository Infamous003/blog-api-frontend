import { login, signup } from "../utils";
import { useContext } from "react";
import { CurrentUserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const {setCurrentUser} = useContext(CurrentUserContext);
    const navigate = useNavigate();

    function handleFormSubmit(formData) {
        const formUsername = formData.get("username");
        const formPassword = formData.get("password");
        const loginBtn = formData.get("loginBtn");
        if (loginBtn) {
            login(formUsername, formPassword, setCurrentUser);
            navigate("/my-blogs")
        }else {
            signup(formUsername, formPassword);
            navigate("/my-blogs")
        }
    }

    return(<>
    <details is-="popover">
        <summary>Login/Sign-up</summary>
        <form action={ handleFormSubmit }>
            <div className="widget">
                <label htmlFor="username">
                    Username:
                </label>
                <input type="text"
                        id="username" 
                        name="username" 
                        placeholder="johndoe123"
                        required/>
            </div>

            <div className="widget">
                <label htmlFor="password">
                    Password:
                </label>
                <input type="password"
                        id="password"
                        name="password"
                        placeholder="********"
                        required/>
            </div>

            <div className="btns-container">
                <button size-="small" name="loginBtn" value="login">Login</button>
                <button size-="small" name="registerBtn" value="register">Sign-up</button>
            </div>
        </form>
    </details>
    </>)
}