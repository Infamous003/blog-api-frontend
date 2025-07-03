export default function Form({ setCurrentUser }) {
    const baseUrl = "http://localhost:8000/auth";
    

    function signup(formUsername, formPassword) {
        const url = baseUrl + "/register";
        const requestHeaders = {
            "accept": "application/json",
            "Content-Type": "application/json"
        };

        const requestBody = {
            "username": formUsername,
            "password": formPassword
        }
        fetch(url, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(requestBody)
        })
        .then((response) => {
            if (response.status == 409) {
                throw new Error("Username taken")
            }
            
            if (!response.ok) {
                throw new Error(`An error occured while signing up. Error ${response.status}: ${response.statusText}`)
            }
            return response;
        })
        .then(function() {
            alert("Account successfully created!");
        })
        .catch(error => alert(error.message));
    }

    function login(formUsername, formPassword) {
        const url = baseUrl + "/login";
        const requestHeaders = {
            "accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const requestBody = new URLSearchParams({
            "username": formUsername,
            "password": formPassword
        });
        // We are using URLSearchParams because the backend accepts the data
        // in a form not json, so content type is appli/x-www... instead of
        // application/json
        fetch(url, {
            method: "POST",
            headers: requestHeaders,
            body: requestBody
        })
        .then((response) => {
            if (response.status == 401) {
                throw new Error(`Username or password is incorrect.`)
            }
            if (!response.ok) {
                throw new Error(`An error occured while loggin in. Error ${response.status}: ${response.statusText}`)
            }
            return response;
        })
        .then((data) => {
            localStorage.setItem("access_token", data.access_token);
            setCurrentUser(formUsername);
        })
        .catch(error => alert(error.message));
    }

    function handleFormSubmit(formData) {
        const formUsername = formData.get("username");
        const formPassword = formData.get("password");
        const loginBtn = formData.get("loginBtn");
        const registerBtn = formData.get("registerBtn");
        if (loginBtn) {
            login(formUsername, formPassword);
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
                        required
                        defaultValue={"string"} />
            </div>

            <div className="widget">
                <label htmlFor="password">
                    Password:
                </label>
                <input type="password"
                        id="password"
                        name="password"
                        placeholder="********"
                        required
                        defaultValue={"string"} />
            </div>

            <div className="btns-container">
                <button size-="small" name="loginBtn" value="login">Login</button>
                <button size-="small" name="registerBtn" value="register">Sign-up</button>
            </div>
        </form>
    </details>
    </>)
}