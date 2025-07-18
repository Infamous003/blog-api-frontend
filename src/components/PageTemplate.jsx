import { createContext, useState } from "react"

export const PostsContext = createContext(null);

export default function PageTemplate({ heading, children }) {
    const [posts, setPosts] = useState([]);

    return(<>
        <PostsContext.Provider value={{posts, setPosts}}>
            <div box-="square" shear-="top" className="hero-container">
                <div>
                    <span className="box-heading">{ heading }</span>
                </div>
                { children }
            </div>
        </PostsContext.Provider>
    </>)
}