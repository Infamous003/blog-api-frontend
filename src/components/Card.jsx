function Card({ title, subtitle, content, author }) {
    const formattedDate = new Date().toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric"
                            });

    
    return (<>
        <div box-="square" className="row">
            <div className="user-profile-container">
                <span is-="badge" cap-="triangle" variant-="aqua" className="username">
                    <b>@{author}</b>
                </span>
                <span className="date">Posted on {formattedDate}</span>
            </div>
            <div is-="separator" direction-="y" cap-="bisect"></div>
            <span className="post-meta-container">
                <h3 is-="typography-block">{ title }</h3>
                <p className="post-subtitle">{ subtitle }</p>
                <br />
                <button className="read-more-btn" size-="small">Read more</button>
            </span>
        </div>
    </>)
}

//   {
//     "id": 1,
//     "title": "Hello, TUI World",
//     "content": "Just testing out my frontend in terminal UI. Looks neat so far!",
//     "author_id": 1,
//     "likes": 3
//   },

export default Card;