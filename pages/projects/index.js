import ProjectCard from "../../components/ProjectCard"
import Layout from "../../components/Layout"
import { projectData } from "../../data/projects"
import Utility from "../../utility"
import { useState } from "react"

const ProjectsPage = props => {
    const projects = Utility.sortByDate(projectData)
    const [visibleProjects, updateProjects] = useState(projects)
    const [length, updateLength] = useState(8)

    function showMore() {
        updateLength(
            visibleProjects.length - length >= 8 ? length + 8 : visibleProjects.length
        )
    }

    return (
        <>
            <Layout page = "Projects" fullWidth>
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
            `}</style>
        </>
    )
}

export default ProjectsPage
