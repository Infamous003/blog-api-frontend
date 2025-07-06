export const baseUrl = "http://localhost:8000/auth";

export async function fetchPosts(postsUrl, setPosts, setIsLoading) {
    const access_token = localStorage.getItem("access_token");
    let headers = {
        "accept": "application/json",
    }
    if (access_token) {
        headers = {
            "accept": "application/json",
            "Authorization": `bearer ${access_token}`,
        }
    }
    try {
        const response = await fetch(postsUrl, {
            method: "GET",
            headers: headers,
        });
        if (!response.ok) {
            throw new Error(`Server responded with a ${response.status} error`)
        }
        const result = await response.json();
        setPosts(result);
        setIsLoading(false);
    } catch (error) {
        console.log(`Failed to fetch the data.\n${error.message}`);
    }
}


export function signup(formUsername, formPassword) {
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

export function login(formUsername, formPassword, setCurrentUser) {
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
        return response.json();
    })
    .then((data) => {
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        setCurrentUser(formUsername);
    })
    .catch(error => alert(error.message));
}