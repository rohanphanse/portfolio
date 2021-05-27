const FooterSection = props => (
    <>
        <div className = "footerSection">
            <div className = "footerTitle">{props.title}</div>
            {props.children}
        </div>
        <style jsx>{`
            .footerSection {
                display: flex;
                flex-direction: column;
                width: 200px;
            }

            .footerTitle {
                background-color: inherit;
                font-size: 0.9rem;
                font-weight: bold;
                padding: 5px 0;
                transition-duration: 100ms;
                color: var(--text);
                opacity: 0.9;
                text-decoration: none;
            }
        `}</style>
    </>
)

export default FooterSection