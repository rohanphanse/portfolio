import { useState } from "react"
import { useRouter } from "next/router"

const Search = (props) => {
    const router = useRouter()
    const [show, toggleShow] = useState(false)

    function handle_keypress(event) {
        if (event.key === "Enter") {
            search()
        }
    }

    function search() {
        const query = document.getElementById("search").value
        router.push(`/search?q=${encodeURIComponent(query)}`)
    }

    function toggle() {
        if (show && document.getElementById("search").value) {
            search()
        } else {
            toggleShow(!show)
        }
    }

    return (
        <>
            <div className="search">
                <input
                    id="search"
                    className={show ? "searchOn" : "searchOff"}
                    type="text"
                    name="search"
                    placeholder="Search..."
                    autoComplete="off"
                    onKeyPress={handle_keypress}
                />
                <div
                    id="searchBtn"
                    className={show ? "searchBtnOn" : "searchBtnOff"}
                    onClick={toggle}
                >
                    <i id="searchIcon" className="fas fa-search"></i>
                </div>
            </div>
            <style jsx>{`
                .search {
                    position: relative;
                    display: flex;
                    flex-wrap: nowrap;
                    align-items: center;
                }

                #search {
                    display: flex;
                    align-items: baseline;
                    padding: 0.3rem 1.9rem 0.3rem 0.8rem;
                    color: var(--text-light);
                    border-radius: 50px;
                    transition: 0.3s;
                    font-size: 0.9rem;
                }

                #searchBtn {
                    cursor: pointer;
                    color: var(--text-light);
                    position: absolute;
                    right: 9px;
                    transition-duration: 0.1s;
                }

                #searchBtn:hover {
                    color: white;
                }

                #searchBtn:active {
                    transform: scale(0.9);
                }

                .searchOff {
                    width: 0px;
                    background-color: inherit;
                }

                .searchOn {
                    width: 200px;
                    background-color: var(--medium);
                }

                .searchOn ::placeholder {
                    color: #a3a3a3;
                }
            `}</style>
        </>
    )
}

export default Search
