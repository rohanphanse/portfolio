import Utility from "../utility"
import LanguageTag from "../components/LanguageTag"
import Link from "next/link"

const ProjectCard = ({ project }) => {
    return (
        <>
            <Link href = {`/projects/${project.id}`}>
                <a className = "card">
                    <div className = "title">{project.title}</div>
                    <div className = "date">{Utility.formatDate(project.date)}</div>
                    <img src = {project.thumbnail} className = "thumbnail" />
                    <div className = "languages">
                        {project.languages.map(language => (
                            <LanguageTag language = {language} key = {language} />
                        ))}
                    </div>
                    <div className = "description">{project.description}</div>
                </a>
            </Link>
            <style jsx>{`
                .card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-radius: 8px;
                    padding: 20px;
                    transition: 0.2s;
                    text-decoration: none;
                    margin: 10px;
                    background-color: var(--medium);
                    color: var(--text);
                }

                .card:hover {
                    transform: translateY(-2px);
                    box-shadow: 
                                0 -2px 2px rgba(0,0,0,0.07), 
                                0 -1px 1px rgba(0,0,0,0.07), 
                                0 1px 2px rgba(0,0,0,0.07), 
                                0 2px 4px rgba(0,0,0,0.07), 
                                0 4px 8px rgba(0,0,0,0.07), 
                                0 8px 16px rgba(0,0,0,0.07),
                                0 16px 32px rgba(0,0,0,0.07), 
                                0 32px 64px rgba(0,0,0,0.07);
                }

                .thumbnail {
                    margin-bottom: 10px;
                    height: 120px;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 4px;
                }

                .description {
                    font-size: 0.9rem;
                }

                .title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-align: center;
                }

                .date {
                    font-size: 0.9rem;
                    color: var(--text-light);
                    margin-bottom: 15px;
                }

                @media only screen and (max-width: 950px) {
                    .thumbnail {
                        height: 150px;
                    }
                }

                @media only screen and (max-width: 700px) {
                    .thumbnail {
                        height: 200px;
                    }
                }

                @media only screen and (max-width: 450px) {
                    .thumbnail {
                        height: 200px;
                    }
                }

                .languages {
                    display: flex;
                    flex-direction: row;
                    align-self: flex-start;
                    margin-bottom: 10px;
                }
            `}</style>
        </>
    )
}

export default ProjectCard
