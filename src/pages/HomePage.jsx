import PageTemplate from "../components/PageTemplate";
import Hero from "../components/Hero";
import CardsList from "../components/CardsList";


export default function HomePage() {
    return(<>
        <PageTemplate heading={"Home"} >
            <Hero />
            <CardsList />
        </PageTemplate>
    </>)
}