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


export default Card;