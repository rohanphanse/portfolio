import { useState } from "react"
import NavDropdownLink from "./NavDropdownLink"

const NavDropdown = props => {
    const [show, toggleShow] = useState(false)
    const [count, counter] = useState(0)

    return (
        <>
            <div className = "navDropdown">
                <div className = "navDropdownBtn" onClick={() => {toggleShow(!show); counter(count + 1)}}>
                    More
                    <i id = "icon" className = {count ? (show ? "fas fa-chevron-down rotate" : "fas fa-chevron-down rotateBack") : "fas fa-chevron-down"}></i>
                </div>

                <div className = "navDropdownContent">
                    <NavDropdownLink page = "https://repl.it/@Roar123" img = "replit.png"
                    static>Repl.it</NavDropdownLink>
                    <NavDropdownLink page = "https://github.com/rohanphanse" icon = "fab fa-github" static>Github</NavDropdownLink>
                    <NavDropdownLink page = "/">More</NavDropdownLink>
                </div>
                
            </div>
            <style jsx>{`
                .navDropdownBtn {
                    display: flex;
                    flex-wrap: nowrap;
                    align-items: baseline;
                    background-color: inherit;
                    margin: 0 0.7rem 0 0.1rem;
                    padding: 4px 12px;
                    font-size: 1rem;
                    font-weight: bold;
                    transition-duration: 100ms;
                    color: var(--text-light);
                    border-radius: 9999px;
                    text-decoration: none;
                    cursor: pointer;
                }

                .navDropdownBtn:hover {
                    color: var(--text);
                }

                .navDropdownBtn:active {
                    transform: scale(0.9);
                    -webkit-user-select: none;
                    -moz-user-select: none; 
                    -ms-user-select: none;     
                    user-select: none; 
                }

                #icon {
                    margin-left: 5px;
                    font-size: 0.9rem;
                }

                .rotate {
                    animation: rotate 0.3s;
                    transform: rotate(180deg);
                }

                .rotateBack {
                    animation: rotateBack 0.3s;
                    transform: rotate(0deg);
                }

                .navDropdownContent {
                    animation: slideIn 0.3s;
                    margin-top: 20px;
                    padding: 14px 0;
                    display: ${show ? "block" : "none"};
                    position: absolute;
                    background-color: var(--primary);
                    min-width: 160px;
                    border-radius: 12px;
                    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                            0 2px 2px rgba(0,0,0,0.11), 
                            0 4px 4px rgba(0,0,0,0.11), 
                            0 8px 8px rgba(0,0,0,0.11),
                            0 16px 16px rgba(0,0,0,0.11);
                }

                @keyframes rotate {
                    from {transform: rotate(0deg);}
                    to {transform: rotate(180deg);}
                }

                @keyframes rotateBack {
                    from {transform: rotate(180deg);}
                    to {transform: rotate(360deg);}
                }

                @keyframes slideIn {
                    from {opacity: 0; margin-top: 50px;}
                    to {opacity: 1; margin-top: 20px;}
                }

            `}</style>
        </>
    )
}


export default NavDropdown