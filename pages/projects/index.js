import ProjectCard from "../../components/ProjectCard"
import Layout from "../../components/Layout"
import { projectData, projectDataById } from "../../data/projects"
import Utility from "../../utility"
import { useState, useEffect } from "react"
import Search from "../../components/ProjectSearch"

const ProjectsPage = props => {
    // Projects
    const projects = Utility.sortByDate(projectData)
    const [visibleProjects, updateProjects] = useState(projects)
    const [length, updateLength] = useState(8)

    // Query
    const [query, updateQuery] = useState([])
    const [category, updateCategory] = useState("All")

    function showMore() {
        updateLength(
            projects.length - length >= 8 ? length + 8 : projects.length
        )
    }

    useEffect(() => {
        if (query.length) {
            const searched_projects_count = {}
            for (const q of query) {
                projects.filter(project => {
                    let values = []
                    if (category === "All") {
                        values = [project.title, project.date.year, project.date.month, ...project.languages]
                    } else if (category === "Date") {
                        values = [project.date.year, project.date.month]
                    } else if (category === "Title") {
                        values = [project.title]
                    } else if (category === "Language") {
                        values = [...project.languages]
                    }

                    const contains_query = values.filter(value => {
                        return value.toString().toLowerCase().includes(q.toLowerCase())
                    }).length

                    if (contains_query) {
                        searched_projects_count[project.id] = searched_projects_count[project.id] ? searched_projects_count[project.id] + 1 : 1
                    }
                })
            }

            const searched_projects = []
            for (const id in searched_projects_count) {
                if (searched_projects_count[id] === query.length) {
                    searched_projects.push(projectDataById[id])
                }
            }
            updateProjects(searched_projects)
        }
    }, [query, category])
        
    return (
        <>
            <Layout page = "Projects">
                <div className = "search-container">
                    <Search updateQuery = {value => {
                        const value_list = value.trim().split(" ")
                        updateQuery(value_list.length === 1 ? value_list : value_list.filter(v => v))
                    }} updateCategory = {value => updateCategory(value)} />
                </div>
                <div className = "projects">
                    {visibleProjects.slice(0, length).map(project => (
                        <ProjectCard project = {project} key = {project.id} />
                    ))}
                </div>
                {visibleProjects.length !== length && visibleProjects.length > 8 && (
                    <div className="center">
                        <div onClick = {showMore} className = "show-more">Show More</div>
                    </div>
                )}
            </Layout>
            <style jsx>{`
                .projects {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    max-width: 1000px;
                    margin: auto;
                }

                .projects-title {
                    text-align: center;
                }

                @media only screen and (min-width: 1700px) {
                    .projects {
                        grid-template-columns: repeat(6, 1fr);
                        max-width: 80vw;
                    }
                }
                
                @media only screen and (max-width: 950px) {
                    .projects {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media only screen and (max-width: 950px) {
                    .projects {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media only screen and (max-width: 700px) {
                    .projects {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media only screen and (max-width: 450px) {
                    .projects {
                        grid-template-columns: repeat(1, 1fr);
                    }
                }

                .center {
                    display: flex;
                    justify-content: center;
                }

                .show-more {
                    color: var(--text);
                    padding: 10px 15px;
                    border-radius: 4px;
                    background-color: var(--medium);
                    margin-top: 20px;
                    cursor: pointer;
                    transition-duration: 0.2s;
                }

                .show-more:hover {
                    transform: translateY(-2px);
                    box-shadow: 
                                0 -2px 2px rgba(0,0,0,0.07), 
                                0 -1px 1px rgba(0,0,0,0.07), 
                                0 1px 2px rgba(0,0,0,0.07), 
                                0 2px 4px rgba(0,0,0,0.07), 
                                0 4px 8px rgba(0,0,0,0.07), 
                                0 8px 16px rgba(0,0,0,0.07),
                                0 16px 32px rgba(0,0,0,0.07);
                }

                .search-container {
                    display: flex;
                    flex-dirextion: row;
                    justify-content: center;
                }
            `}</style>
        </>
    )
}

export default ProjectsPage
