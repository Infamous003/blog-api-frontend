import Card from "./Card";
import { useState, useEffect } from "react";

function CardsList() {

    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        try {
            const data = await fetch("http://127.0.0.1:8000/posts/")
            const result = await data.json();
            setPosts(result);
        } catch (error) {
            console.log("Failed to fetch the data");
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (<>
        <div className="column .grid-container">
            { posts.map((post) =>
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