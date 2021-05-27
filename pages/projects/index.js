import ProjectCard from "../../components/ProjectCard"
import Layout from "../../components/Layout"
import { projectData } from "../../data"
import Utility from "../../utility"

const ProjectsPage = props => {
    const projects = Utility.sortByDate(projectData)

    return (
        <>
            <Layout page = "Projects">
                <div className = "projects">
                    {projects.map(project => (
                        <ProjectCard project = {project} key = {project.id} />
                    ))}
                </div>
            </Layout>
            <style jsx>{`
                .projects {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }

                .projects-title {
                    text-align: center;
                }

                @media only screen and (max-width: 950px) {
                    .projects {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media only screen and (max-width: 700px) {
                    .projects {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media only screen and (max-width: 450px) {
                    .projects {
                        display: grid;
                        grid-template-columns: repeat(1, 1fr);
                    }
                }
            `}</style>
        </>
    )
}

export default ProjectsPage
