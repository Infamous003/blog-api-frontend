import Card from "./Card";
import { useState, useEffect } from "react";

function CardsList() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchPosts() {
        try {
            const response = await fetch("http://127.0.0.1:8000/poosts/")
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

    useEffect(() => {
        fetchPosts();
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