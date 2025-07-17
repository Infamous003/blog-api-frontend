import PageTemplate from "../components/PageTemplate";
import CreateBlogForm from "../components/CreateBlogForm";
export default function WriteBlogPage() {
    return (<>
        <PageTemplate heading={"New Blog"} >
            <CreateBlogForm />
        </PageTemplate>    
    </>)
}