import { siteData } from "../data/site"
import SearchBar from "../components/SearchBar"
import Layout from "../components/Layout"

const SearchPage = (props) => {
    return (
        <>
            <Layout page = "Search">
                <h1>{props.initialQuery}</h1>
                <SearchBar categories={["All", "Title", "Description", "Type"]} />
            </Layout>
        </>
    )
}

export const getServerSideProps = (context) => {
    const initialQuery = context.query.q

    return {
        props: {
            initialQuery
        }
    }
}

export default SearchPage