import { createPost } from "../utils";

export default function CreateBlogForm() {

    function handleFormSubmit(formData) {
        const title = formData.get("title");
        const subtitle = formData.get("subtitle");
        const content = formData.get("content");
        const newPost = {
            "title": title,
            "subtitle": subtitle,
            "content": content
        }
        createPost(newPost)
    }

    function handleResetBtn(event) {
        event.preventDefault()
        const form = document.querySelector(".create-blog-form")
        form.reset();
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
                        required/>
            </div>

            <div className="widget">
                <label htmlFor="subtitle" className="subtitle">
                    Subtitle:
                </label>
                <input type="text"
                        id="subtitle" 
                        name="subtitle" 
                        placeholder="Here goes your blog's subtitle, if any"/>
            </div>

            <div className="widget">
                <label htmlFor="content" className="content">
                    Content:
                </label>
                <textarea name="content"
                          id="content"
                          rows={10}
                          size-="small"
                          placeholder="Type anything here">
                </textarea>
            </div>
            <button size-="small" className="create-btn">Create</button>
            <button onClick={handleResetBtn} size-="small" className="reset-btn">Reset</button>
        </form>
    </>)
}