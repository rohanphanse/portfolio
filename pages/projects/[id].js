import Layout from "../../components/Layout" 
import { projectData } from "../../data"
import Utility from "../../utility"
import Error from "next/error"
import LanguageTag from "../../components/LanguageTag"

const ProjectPage = ({ project }) => {
    return (
        <>
            {project === "Error" ?
                <Error />
            :
                <>
                    <Layout page = {project.title}>
                        <h1 className = "title">
                            {project.title}
                            <a href = {project.url} target = "_blank" className = "open-link">
                                <div className = "fas fa-external-link-alt"></div>
                            </a>
                        </h1>
                        <div className = "date">{Utility.formatDate(project.date)}</div>
                        <div className = "languages">
                            {project.languages.map(language => (
                                <LanguageTag language = {language} key = {language} />
                            ))}
                        </div>
                        <div className = "wrapper-container">
                            <div className = "wrapper">
                                <iframe className = "frame" src = {project.url} />
                            </div>
                        </div>
                    </Layout>
                    <style jsx>{`
                        .wrapper-container {
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

                        .title {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            margin-bottom: 2px;
                        }

                        .date {
                            font-size: 0.9rem;
                            color: var(--text-light);
                            margin-bottom: 12px;
                            text-align: center;
                        }

                        .languages {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            margin-bottom: 20px;
                        }

                        .open-link {
                            color: var(--accent);
                            margin-left: 12px;
                            font-size: 1.5rem;
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