const ProjectSearch = props => { 
    return (
        <>
            <div className="search-container">
                <div className = "search-categories-container">
                    <select className = "search-categories" onChange = {event => props.updateCategory(event.target.value)}>
                        <option value = "All">All</option>
                        <option value = "Title">Title</option>
                        <option value = "Date">Date</option>
                        <option value = "Language">Language</option>
                    </select>
                    <div className = "select-arrow fas fa-angle-down"></div>
                </div>
                <input type="text" className="search-bar" onChange = {event => props.updateQuery(event.target.value)} />
                {/*<div className="search-button">
                    <i className="fas fa-search" />
                </div>*/}
            </div>
            <style jsx>{`
                .search-container {
                    position: relative;
                    width: 700px;
                    display: flex;
                    flex-direction: row;
                    --height: 34.5px;
                }
                
                .search-bar {
                    width: 100%;
                    border-radius: 0 8px 8px 0;
                    padding: 7px 50px 7px 15px;
                    font-size: 1rem;
                    transition-duration: 0.2s;
                    margin-bottom: 20px;
                    height: var(--height);
                    background-color: var(--medium);
                    color: var(--text);
                    z-index: 1;
                }

                .search-bar:focus {
                    border-color: rgb(38, 145, 252);
                    box-shadow: 0 0 0 3px rgba(250, 72, 250, 0.5);
                }

                .search-categories {
                    background-color: var(--primary);
                    color: var(--text-light);
                    display: flex;
                    height: var(--height);
                    width: 115px;
                    font-size: 0.9rem;
                    padding: 0 15px;
                    border-radius: 8px 0 0 8px;
                    font-weight: bold;
                    letter-spacing: -0.5px;
                }

                .search-categories-container {
                    position: relative;
                }

                .select-arrow {
                    position: absolute;
                    right: 10px;
                    top: calc(var(--height) / 2);
                    transform: translateY(-50%);
                    font-size: 1.15rem;
                    color: var(--text-light);
                }
      `}</style>
        </>
    )
}

export default ProjectSearch