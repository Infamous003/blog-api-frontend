import Card from "./Card";
import { useState, useEffect } from "react";
import { fetchPosts } from "../utils";
import { useContext } from "react";
import { CurrentUserContext } from "../App";
import { PostsContext } from "./PageTemplate";

function CardsList({ isLoggedIn }) {

    const [isLoading, setIsLoading] = useState(true);
    const {posts, setPosts} = useContext(PostsContext);
    const {currentUser} = useContext(CurrentUserContext);
        
    let postsUrl = `http://127.0.0.1:8000/posts/`;

    if (currentUser) {
        postsUrl = `http://127.0.0.1:8000/posts/my-posts/`;
    }

    useEffect(() => {
        fetchPosts(postsUrl, setPosts, setIsLoading);
    }, []);

    return (<>
        <div className="column .grid-container">
            { isLoading ? <h3>Fetching posts...</h3> : posts.map((post) =>
                        <Card   key={post.id}
                                title={post.title}
                                subtitle={post.subtitle}
                                content={post.content}
                                author={post.username} 
                                id={post.id}
                                isLoggedIn={isLoggedIn}
                        />)
            }
        </div>
    </>)
}

export default CardsList;