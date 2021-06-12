import Link from "next/link"

const Title = props => (
    <>
        <div className = "title">
            <Link href = "/">
                <a className = "titleImg">
                    <img src = "/images/logo.png" alt = "Logo" />
                </a>
            </Link>
            <Link href = "/">
                <a className = "titleText">Rohan Phanse</a>
            </Link>
            
        </div>
        <style jsx>{`
            .title {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                margin: 1.2rem 0;
            }

            .titleText {
                background-color: inherit;
                color: var(--text);
                font-size: 3rem;
                font-weight: 700;
                margin: 0 1rem 0 1rem;
                text-decoration: none;
                transition-duration: 0.1s;
            }

            .titleText:hover {
                text-decoration: none;
            }

            .titleText:active {
                transform: scale(0.95);
            }

            .titleImg {
                width: 80px;
                transition-duration: 0.1s;
            }

            .titleImg:active {
                width: 74px;
                margin: 3px;
            }

            @media only screen and (max-width: 800px) {
                   .titleText {
                       font-size: 1.5rem;
                   }
            }
        `}</style>
    </>

)

export default Title