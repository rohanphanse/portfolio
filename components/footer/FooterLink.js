import Link from "next/link"

const FooterLink = (props) => (
    <>
        {props.static ? (
            <a href={props.page} target="_blank" className="footerLink">
                {props.children}
            </a>
        ) : (
            <Link href={props.page}>
                <a className="footerLink">{props.children}</a>
            </Link>
        )}
        <style jsx>{`
            .footerLink {
                background-color: inherit;
                font-size: 1rem;
                padding: 5px 0;
                transition-duration: 100ms;
                color: #a3a3a3;
                text-decoration: none;
            }

            .footerLink:hover {
                color: var(--text-light);
            }
        `}</style>
    </>
)

export default FooterLink
