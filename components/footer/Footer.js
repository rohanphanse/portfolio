import FooterLink from "./FooterLink.js"
import FooterSection from "./FooterSection.js"
import FooterInfo from "./FooterInfo.js"

const Footer = props => (
    <>
        <div className = "footer">
            <div className = "footerContent">
                <FooterSection title = "Main">
                    <FooterLink page = "/">Home</FooterLink>
                    <FooterLink page = "/about">About</FooterLink>
                    <FooterLink page = "/projects">Projects</FooterLink>
                    <FooterLink page = "/blog">Blog</FooterLink>
                    <FooterLink page = "/contact">Contact</FooterLink>
                </FooterSection>
                <FooterSection title = "More">
                    <FooterLink page = "/">Link</FooterLink>
                    <FooterLink page = "/">Link</FooterLink>
                    <FooterLink page = "/">Link</FooterLink>
                </FooterSection>
                <FooterSection title = "Platforms">
                    <FooterLink page = "https://repl.it/@Roar123" static>Repl.it</FooterLink>
                    <FooterLink page = "https://github.com/rohanphanse" static>Github</FooterLink>
                    <FooterLink page = "/">Other</FooterLink>
                </FooterSection>
            </div>
            <div className = "footerContent">
                <FooterInfo />
            </div>
        </div>
        <style jsx>{`
            .footer {
                padding: 40px;
                width: 100%;
                background-color: var(--primary)
            }

            .footerContent {
                display: flex;
                flex-direction: row;
                margin: auto;
                max-width: 1000px;
                padding: 20px;
            }
        `}</style>
    </>
)

export default Footer