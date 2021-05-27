import Link from "next/link"
import { useRouter } from "next/router"

const NavLink = props => {
    const router = useRouter()

    return (
        <>
            <Link href = {props.page || "/"} >
                <a className = {router.pathname === props.page ? "navLink active" : "navLink"}>
                    {props.name}
                </a>
            </Link>
            <style jsx>{`
                .navLink {
                    background-color: inherit;
                    margin: 0 0.7rem 0 0.1rem;
                    padding: 4px 12px 4px 12px;
                    font-size: 1rem;
                    font-weight: bold;
                    transition-duration: 100ms;
                    color: var(--text-light);
                    border-radius: 9999px;
                    text-decoration: none;
                }

                .navLink:hover {
                    color: var(--text);
                }

                .navLink:active {
                    transform: scale(0.9);
                }

                .active {
                    color: var(--accent);
                    background: linear-gradient(to right, var(--accent), var(--accent-dark));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </>
    )
}

export default NavLink