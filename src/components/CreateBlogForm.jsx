import { createPost } from "../utils";
import { updatePost } from "../utils";
import { PostsContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CreateBlogForm({ isNewPost=true }) {
    const {posts, setPosts} = useContext(PostsContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const {id} = useParams();

    

    function populateForm() {
        if (!isNewPost && posts.length > 0 && id) {
            const oldPost = posts.find((p) => p.id == id);
            if (oldPost) {
            setTitle(oldPost.title || "");
            setSubtitle(oldPost.subtitle || "");
            setContent(oldPost.content || "");
            } else {
            console.warn(`Post with id:${id} not found`);
            }
        }
    }

    useEffect(() => {
        populateForm()
    }, [isNewPost, posts, id])

    function handleFormSubmit(formData) {
        const title = formData.get("title");
        const subtitle = formData.get("subtitle");
        const content = formData.get("content");
        const newPost = {
            "title": title,
            "subtitle": subtitle,
            "content": content
        }
        if (isNewPost){
            createPost(newPost)
            navigate("/my-blogs")
        }
        else {
            updatePost(id, newPost, setPosts)
            navigate(`/blogs/${id}`)
        }
    }

    function handleResetBtn(event) {
        event.preventDefault()
        const form = document.querySelector(".create-blog-form")
        setTitle("")
        setSubtitle("")
        setContent("")
        form.reset()
    }

    return(<>
        <form action={handleFormSubmit} className="create-blog-form">
            <div className="widget">
                <label htmlFor="title" className="title">
                    Title:
                </label>
                <input type="text"
                        id="title" 
                        name="title" 
                        placeholder="This is my first post"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required/>
            </div>

            <div className="widget">
                <label htmlFor="subtitle" className="subtitle">
                    Subtitle:
                </label>
                <input type="text"
                        id="subtitle" 
                        name="subtitle" 
                        placeholder="Here goes your blog's subtitle, if any"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}/>
            </div>

            <div className="widget">
                <label htmlFor="content" className="content">
                    Content:
                </label>
                <textarea name="content"
                          id="content"
                          rows={10}
                          size-="small"
                          placeholder="Type anything here"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}>
                </textarea>
            </div>
            <div className="btns-container">
                <button size-="small" className="create-btn">{ isNewPost ? "Create" : "Update" }</button>
                <button onClick={handleResetBtn} size-="small" className="reset-btn">Reset</button>
            </div>
        
        </form>
    </>)
}