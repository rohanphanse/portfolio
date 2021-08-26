import { siteData, siteDataById } from "../data/site"
import SearchBar from "../components/SearchBar"
import Layout from "../components/Layout"
import { useState, useEffect } from "react"
import Utility from "../utility"

const SearchPage = (props) => {
    // Site results
    const results = siteData
    const [visibleResults, updateResults] = useState(results)
    const [length, updateLength] = useState(8)

    // Query
    const [queryList, updateQueryList] = useState([])
    const [category, updateCategory] = useState("All")

    useEffect(() => {
        if (queryList.length) {
            const searched_results_count = {}
            for (const query of queryList) {
                results.filter((project) => {
                    let values = []
                    if (category === "All") {
                        values = [
                            project.title,
                            project.description,
                            project.type
                        ]
                    } else if (category === "Title") {
                        values = [project.title]
                    } else if (category === "Description") {
                        values = [project.description]
                    } else if (category === "Type") {
                        values = [project.type]
                    }

                    const contains_query = values.filter((value) => {
                        return value
                            .toString()
                            .toLowerCase()
                            .includes(query.toLowerCase())
                    }).length

                    if (contains_query) {
                        searched_results_count[project.id] =
                            searched_results_count[project.id]
                                ? searched_results_count[project.id] + 1
                                : 1
                    }
                })
            }

            const searched_results = []
            for (const id in searched_results_count) {
                if (searched_results_count[id] === queryList.length) {
                    searched_results.push(siteDataById[id])
                }
            }
            updateResults(searched_results) 
        }
    }, [queryList, category])

    function processQuery(value) {
        const value_list = value.trim().split(" ")
        updateQueryList(
            value_list.length === 1
                ? value_list
                : value_list.filter((v) => v)
        )
    }

    return (
        <>
            <Layout page = "Search">
                <h1>{props.initialQuery}</h1>
                <SearchBar categories={["All", "Title", "Description", "Type"]} updateQuery={(value) => processQuery(value)}
                        updateCategory={(value) => updateCategory(value)}
                        initialQuery = {props.initialQuery} />
                <pre>{JSON.stringify(visibleResults)}</pre>
            </Layout>
            <style jsx>{`
                
            `}</style>
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