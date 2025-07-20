import Card from "./Card";
import { useState, useEffect } from "react";
import { fetchPosts, deletePost } from "../utils";
import { useContext } from "react";
import { CurrentUserContext, PostsContext } from "../App";
import Modal from "./Modal";

function CardsList({ isLoggedIn }) {

    const [isLoading, setIsLoading] = useState(true);
    const {posts, setPosts} = useContext(PostsContext);
    const {currentUser} = useContext(CurrentUserContext);
    const [postToDelete, setPostToDelete] = useState(null);
        
    let postsUrl = `http://127.0.0.1:8000/posts/`;

    if (currentUser) {
        postsUrl = `http://127.0.0.1:8000/posts/my-posts/`;
    }

    useEffect(() => {
        fetchPosts(postsUrl, setPosts, setIsLoading);
    }, []);

    function handleDeleteClick(id) {
        setPostToDelete(id)
        const modal = document.getElementById("dialog")
        modal.showModal();
    }

    function confirmDelete() {
        console.log("Deleting post with id, ", postToDelete)
        if (postToDelete) {
            deletePost(postToDelete, posts, setPosts)
            setPostToDelete(null);
            document.querySelector("#dialog").close()
        }
    }

    return (<>
        <div className="column .grid-container">
            <Modal onConfirm={confirmDelete} />
            { isLoading ? <pre>Fetching posts...</pre> : 
              posts.length == 0 ? <pre>Looks empty...Why not write a blog?</pre> :
              posts.map((post) =>
                        <Card   key={post.id}
                                title={post.title}
                                subtitle={post.subtitle}
                                content={post.content}
                                author={post.username} 
                                createdAt={post.created_at}
                                id={post.id}
                                isLoggedIn={isLoggedIn}
                                onDelete={() => handleDeleteClick(post.id)}
                        />)
            }
        </div>
    </>)
}

export default CardsList;