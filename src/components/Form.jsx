export default function Form() {

    function login(formUsername, formPassword) {
        const url = "http://localhost:8000/auth/login";
        const requestHeaders = {
            "accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        }
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
        .then(response => response.json())
        .then(data => localStorage.setItem("access_token", data.access_token))
        .catch(error => console.log(error.message));
    }

    function handleFormSubmit(formData) {
        const data = formData;
        const formUsername = formData.get("username");
        const formPassword = formData.get("password");
        const loginBtn = formData.get("loginBtn");
        const registerBtn = formData.get("registerBtn");
        login(formUsername, formPassword);
    }

    return(<>
        <details is-="popover">
        <summary>Logout/Login</summary>
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
                <button size-="small" name="registerBtn" value="register">Register</button>
            </div>
        </form>
    </details>
    </>)
}