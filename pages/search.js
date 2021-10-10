import { siteData, siteDataById } from "../data/site"
import SearchBar from "../components/SearchBar"
import Layout from "../components/Layout"
import { useState, useEffect } from "react"
import Utility from "../utility"
import Link from "next/link"

const SearchResult = (props) => {
    console.log(props.result)
    return (
        <>
            <div className="result">
                <img src = {props.result.thumbnail || ""} className = "thumbnail" />
                <div>
                    <h1>{props.result.title}</h1>
                    <p>{props.result.description}</p>
                    <Link href = {props.result.link}>
                        <a>{props.result.link}</a>
                    </Link>
                    <h4>{props.result.type}</h4>
                </div>
            </div>
            <style jsx>{`
                .result {
                    display: flex;
                    align-items: center;
                }

                .thumbnail {
                    width: 50px;
                    height: 50px;
                    margin-right: 20px;
                }
            `}</style>
        </>
    )
}

const SearchPage = (props) => {
    // Site results
    const results = siteData
    const [visibleResults, updateResults] = useState(results)
    const [length, updateLength] = useState(8)

    // Query
    console.log(props.query)
    const [queryList, updateQueryList] = useState(props.query ? processAndReturnQuery(props.query) : [])
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
            value_list.length === 1 ? value_list : value_list.filter((v) => v)
        )
    }

    function processAndReturnQuery(value) {
        const value_list = value.trim().split(" ")
        return value_list.length === 1 ? value_list : value_list.filter((v) => v)
    }

    return (
        <>
            <Layout page="Search">
                <h1>{props.query}</h1>
                <SearchBar
                    categories={["All", "Title", "Description", "Type"]}
                    updateQuery={(value) => processQuery(value)}
                    updateCategory={(value) => updateCategory(value)}
                    query={props.query}
                />
                <div className = "search-results">
                    {visibleResults.map(result => (
                        <SearchResult result = {result} key = {result.id} />
                    ))}
                </div>
            </Layout>
            <style jsx>{`
            
            `}</style>
        </>
    )
}

export const getServerSideProps = (context) => {
    const query = context.query.q || ""

    return {
        props: {
            query
        }
    }
}

export default SearchPage
