import { server } from "../../config"
import ProjectCard from "../../components/ProjectCard"
import Layout from "../../components/Layout"

const ProjectsPage = props => {
    return (
        <>
            <Layout page = "Projects">
                <div className = "projects">
                    {props.projects.map(project => (
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

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            sort: {
                type: "date"
            }
        })
    })
    const projects = await res.json()

    return {
        props: {
            projects
        }
    }
}

export default ProjectsPage
