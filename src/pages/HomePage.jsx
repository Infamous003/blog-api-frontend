import PageTemplate from "../components/PageTemplate";
import Hero from "../components/Hero";


export default function HomePage() {
    return(<>
        <PageTemplate heading={"Home"} children={<Hero />} />
    </>)
}