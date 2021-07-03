import Layout from "../../components/Layout" 
import { projectData, projectDataById } from "../../data/projects"
import Utility from "../../utility"
import Error from "next/error"
import LanguageTag from "../../components/LanguageTag"
import { readFileSync } from "fs"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import Link from "next/link"

const ProjectPage = ({ project, body }) => {
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
                        <div className = "body-container">
                            <div className = "body">
                                <div className = "markdown">
                                    <Markdown children = {body} rehypePlugins = {[rehypeRaw]} />
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <Link href = "/projects">
                                <a className = "back-to-projects">Back To All Projects</a>
                            </Link>
                        </div>
                    </Layout>
                    <style jsx>{`
                        .wrapper-container {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;

                            --width: 800px;
                            --height: 500px;
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
                            font-size: 1.1rem;
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

                        .body-container {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                        }

                        .body {
                            width: 800px;
                            margin: 20px 0;
                        }

                        @media only screen and (max-width: 800px) {
                            .wrapper-container {
                                --width: 100%;
                                --height: 450px;
                                --scale: 0.6;
                                padding: 0 50px;
                            }

                            .body {
                                width: 100%;
                                padding: 0 50px;
                            }
                        }

                        .center {
                            display: flex;
                            justify-content: center;
                        }
        
                        .back-to-projects {
                            color: var(--text);
                            padding: 10px 15px;
                            border-radius: 4px;
                            background-color: var(--medium);
                            margin-top: 20px;
                            cursor: pointer;
                            transition-duration: 0.2s;
                        }
        
                        .back-to-projects:hover {
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
            }
        </>
    )
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const project = projectDataById[id] || "Error"
    let body = null

    try {
        body = readFileSync(`${process.cwd()}/data/projects/${id}.md`, "utf8")
        console.log("Body", body)
    } catch (error) {
        body = "Error"
        console.log(error)
    }

    return {
        props: {
            project,
            body
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