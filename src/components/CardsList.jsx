import Card from "./Card";
import { useState, useEffect } from "react";
import { fetchPosts } from "../utils";

function CardsList() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPosts(setPosts, setIsLoading);
    }, []);

    return (<>
        <div className="column .grid-container">
            { isLoading ? <h3>Fetching posts...</h3> : posts.map((post) =>
                        <Card   key={post.id}
                                title={post.title}
                                subtitle={post.subtitle}
                                content={post.content}
                                author={post.username} 
                        />)
            }
        </div>
    </>)
}

export default CardsList;