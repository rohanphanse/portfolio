const ProjectSearch = props => { 
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-bar" onChange={event => props.updateQuery(event.target.value)} />
                {/*<div className="search-button">
                    <i className="fas fa-search" />
                </div>*/}
            </div>
            <style jsx>{`
                .search-container {
                    position: relative;
                    max-width: 700px;
                }
                
                .search-bar {
                    width: 100%;
                    border-radius: 8px;
                    padding: 7px 50px 7px 15px;
                    font-size: 1rem;
                    transition-duration: 0.2s;
                    margin-bottom: 20px;
                    height: 34.5px;
                    background-color: var(--medium);
                    color: var(--text);
                }

                .search-bar:focus {
                    border-color: rgb(38, 145, 252);
                    box-shadow: 0 0 0 3px rgba(250, 72, 250, 0.5);
                }

                .search-button {
                    position: absolute;
                    top: 1px;
                    right: 1px;
                    height: 32.5px;
                    width: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: none;
                    border-radius: 0 7.2px 7.2px 0;
                    font-size: 1rem;
                    background-color: var(--primary);
                    transition-duration: 0.2s;
                    pointer-events: none;
                }
      `}</style>
        </>
    )
}

export default ProjectSearch