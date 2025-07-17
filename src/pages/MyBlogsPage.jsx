import PageTemplate from "../components/PageTemplate";
import CardsList from "../components/CardsList";
import { CurrentUserContext } from "../App";
import { useContext } from "react";


export default function MyBlogsPage() {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);    

    return(<>
        <PageTemplate heading={"My blogs"} >
            {currentUser != null ?
                <CardsList isLoggedIn={true} /> :
                <pre size-="large">&gt; Log in to see your posts</pre>}
        </PageTemplate>
    </>)
}