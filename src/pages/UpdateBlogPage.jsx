import PageTemplate from "../components/PageTemplate";
import CreateBlogForm from "../components/CreateBlogForm";
export default function UpdateBlogPage() {
    return (<>
        <PageTemplate heading={"Edit Blog"} >
            <CreateBlogForm isNewPost={false} />
        </PageTemplate>    
    </>)
}