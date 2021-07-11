import { siteData } from "../data/site"
import Search from "../components/Search"
import Layout from "../components/Layout"

const SearchPage = (props) => {
    return (
        <>
            <Layout page = "Search">
                <h1>{props.initialQuery}</h1>
                <Search />
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