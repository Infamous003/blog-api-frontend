import PageTemplate from "../components/PageTemplate";
import Blog from "../components/Blog";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../utils";

export default function BlogPage() {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetchPostById(id, setPost, setIsLoading);
    }, []);

    return (<>
        <PageTemplate heading={"Blog"} >
            { isLoading ? <h3>Fetching post...</h3> : 
                <Blog title={post.title}
                      subtitle={post.subtitle}
                      content={post.content}
                      date={post.date}
                      id={post.id}
                       />
            }
        </PageTemplate>    
    </>)
}