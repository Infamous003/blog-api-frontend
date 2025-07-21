export const baseUrl = "https://blog-api-1i1j.onrender.com/auth";

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

export async function fetchPostById(id, setPost, setIsLoading) {
    const postsUrl = `https://blog-api-1i1j.onrender.com/posts/${id}`;
    let headers = {
        "accept": "application/json",
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
        setPost(result);
        setIsLoading(false);
    } catch (error) {
        console.log(`Failed to fetch the data.\n${error.message}`);
    }
}

export async function deletePost(id, posts, setPosts) {
    const postsUrl = `https://blog-api-1i1j.onrender.com/posts/${id}`;
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
            method: "DELETE",
            headers: headers,
        });
        if (!response.ok) {
            throw new Error(`Server responded with a ${response.status} error`)
        }
        setPosts((posts) => posts.filter((p) => p.id != id));
        console.log(`Post with id ${id} deleted`)
    } catch (error) {
        console.log(`Failed to fetch the data.\n${error.message}`);
    }
}

export async function updatePost(id, updatedPost, setPosts) {
    const postsUrl = `https://blog-api-1i1j.onrender.com/posts/${id}`;
    const access_token = localStorage.getItem("access_token");
    let headers = {
        "accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bearer ${access_token ? access_token : ''}`,
    }
    const body = JSON.stringify(updatedPost)
    try {
        const response = await fetch(postsUrl, {
            method: "PUT",
            headers: headers,
            body: body
        });
        if (!response.ok) {
            throw new Error(`Server responded with a ${response.status} error`)
        }
        setPosts((posts) => [...posts, updatePost]);
    } catch (error) {
        console.log(`Failed to fetch the data.\n${error.message}`);
    }
}

export async function createPost(newPost) {
    const postsUrl = "https://blog-api-1i1j.onrender.com/posts"
    const access_token = localStorage.getItem("access_token");
    let headers = {
        "accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bearer ${access_token ? access_token : ''}`,
    }
    const body = JSON.stringify(newPost)
    try {
        const response = await fetch(postsUrl, {
            method: "POST",
            headers: headers,
            body: body
        });
        if (response.status == 401) {
            alert("You need to be logged in to create blogs")
        }
        if (!response.ok) {
            throw new Error(`Server responded with a ${response.status} error`)
        }
        const result = await response.json();
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
        localStorage.setItem("username", formUsername);
        setCurrentUser(formUsername);
    })
    .catch(error => alert(error.message));
}