import NavLink from "./NavLink"
import NavDropdown from "./NavDropdown"
import NavSearch from "./NavSearch"
import { useState, useEffect } from "react"

const NavBar = props => {
    const [nav, navToggle] = useState(false)

    const handleScroll = () => {
        const distance = document.getElementById("navFull").getBoundingClientRect().top
        if (distance <= 0) {
            navToggle(true)
        } else {
            navToggle(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <>
            <div id = "navFull" className = "navFull">
                <div className = {nav ? "navExpand nav" : "navExpand"}>
                    <div className = "navBar">
                        <NavLink page = "/" name = "Home" active />
                        <NavLink page = "/about" name = "About" />
                        <NavLink page = "/projects" name = "Projects" />
                        <NavLink page = "/blog" name = "Blog" />
                        <NavLink page = "/contact" name = "Contact" />
                        <NavDropdown />
                        <NavSearch />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .navFull {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: center;
                    z-index: 100;
                    position: sticky;
                    top: 0;
                }

                .navBar {
                    z-index: 100;
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    padding: 0.3rem;
                    align-items: center;
                    background-color: var(--primary);
                    width: 1120px;
                    border-radius: 100px;
                }

                .navExpand {
                    display: flex;
                    justify-content: center;
                    width: 1120px;
                    transition: 0.3s;
                    border-radius: 100px;
                    background-color: var(--primary);
                }

                .nav {
                    width: 100vw;
                    border-radius: 0px;
                    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                            0 2px 2px rgba(0,0,0,0.11), 
                            0 4px 4px rgba(0,0,0,0.11), 
                            0 8px 8px rgba(0,0,0,0.11),
                            0 16px 16px rgba(0,0,0,0.11);
                }

                @media only screen and (max-width: 1130px) {
                    .navBar {
                        width: 100vw;
                        border-radius: 0;
                        padding: 0.3rem 1rem;
                        margin: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default NavBar