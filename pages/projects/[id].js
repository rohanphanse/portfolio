import Layout from "../../components/Layout" 
import { projectData } from "../../data"
import Utility from "../../utility"
import Error from "next/error"

const ProjectPage = ({ project }) => {
    return (
        <>
            {project === "Error" ?
                <Error />
            :
                <>
                    <Layout page = {project.title}>
                        <div className = "container">
                            <div className = "wrapper">
                                <iframe className = "frame" src = {project.url} />
                            </div>
                        </div>
                    </Layout>
                    <style jsx>{`
                        .container {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;

                            --width: 800px;
                            --height: 500px;
                            --original-scale: "";
                            --scale: ${0.75};
                        }

                        .wrapper {
                            width: var(--width); 
                            height: var(--height); 
                        }

                        .frame {
                            width: calc(var(--width) / var(--scale));
                            height: calc(var(--height) / var(--scale));
                            background-color: white;
                            transform: scale(var(--scale));
                            transform-origin: 0 0;
                        }
                        
                        @media only screen and (max-width: 850px) {
                            .container {
                                --width: 600px;
                                --height: 450px;
                                --scale: 0.6;
                            }
                        }
                    `}</style>
                </>
            }
        </>
    )
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const project = Utility.getProject(projectData, id)

    return {
        props: {
            project
        }
    }
}

export const getStaticPaths = async () => {
    const ids = projectData.map(project => project.id)
    const paths = ids.map(id => ({ params: { id } }))

    return {
        paths,
        fallback: false
    }
}


export default ProjectPage