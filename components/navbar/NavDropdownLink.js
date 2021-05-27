import Link from "next/link"

const NavDropdownLink = props => (
    <>
        {props.static ?
            <a href = {props.page} target = "_blank" className = {props.classes || "navDropdownLink"}>
                {props.children}
                {props.icon &&
                    <div className = "icon">
                        <i className = {props.icon}></i>
                    </div>
                }
                {props.img &&
                    <div className = "img">
                        <img src = {"/images/" + props.img} />
                    </div>
                }
            </a>
        :
            <Link href = {props.page}>
                <a className = {props.classes || "navDropdownLink"}>
                    {props.children}
                    {props.icon &&
                        <div className = "icon">
                            <i className = {props.icon}></i>
                        </div>
                    }
                    {props.img &&
                        <div className = "img">
                            <img src = {"/images/" + props.img} />
                        </div>
                    }
                </a>
            </Link>
        }
        <style jsx>{`
            .navDropdownLink {
                font-size: 0.9rem;
                float: none;
                color: var(--text);
                padding: 10px 18px;
                text-decoration: none;
                color: white;
                opacity: 0.7;
                display: flex;
                align-items: center;
                text-align: left;
            }

            .navDropdownLink:hover {
                opacity: 0.85;
                background-color: var(--medium);
            }

            .navDropdownLink:active {
                filter: brightness(0.92);
            }

            .icon {
                font-size: 1.2rem;
                margin-left: 9px;
            }

            .img {
                width: 1.2rem;
                height: 1.2rem;
                margin-left: 9px;
                filter: brightness(0) invert(1);
            }

            .first {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }

            .last {
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }    
        `}</style>
    </>
)

export default NavDropdownLink