import Utility from "../utility"

const LanguageTag = ({ language }) => {
    const { color, textColor } = Utility.languageTags[language]
    return (
        <>
            <div className="tag">{language}</div>
            <style jsx>{`
                .tag {
                    color: var(--text-light);
                    font-size: 0.7rem;
                    padding: 2px 5px;
                    border-radius: 4px;
                    margin: 0 3px;
                    border: 1px solid ${color};
                    cursor: pointer;
                    transition-duration: 0.1s;
                }

                .tag:active {
                    background-color ${color};
                    color: ${textColor || "white"};
                }
            `}</style>
        </>
    )
}

export default LanguageTag
