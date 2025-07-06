import { login, signup } from "../utils";
import { useContext } from "react";
import { CurrentUserContext } from "../App";

export default function Form() {
    const {setCurrentUser} = useContext(CurrentUserContext);

    function handleFormSubmit(formData) {
        const formUsername = formData.get("username");
        const formPassword = formData.get("password");
        const loginBtn = formData.get("loginBtn");
        const registerBtn = formData.get("registerBtn");
        if (loginBtn) {
            login(formUsername, formPassword, setCurrentUser);
            console.log(loginBtn);
        }else {
            signup(formUsername, formPassword);
            console.log(registerBtn);
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