const FooterInfo = props => (
    <>
        <div className = "footerInfo">
            <div className = "footerLogo">
                <img className = "footerImg" src = "/images/logo.png" alt = "logo" />
                Rohan Phanse
            </div>
            <div className = "footerLegal">
                Copyright © 2021 Rohan Phanse. All rights reserved.
            </div>
        </div>
        <style jsx>{`
            .footerInfo {
                display: flex;
                flex-direction: column;
            }

            .footerLogo {
                display: flex;
                flex-direction: row;
                align-items: center;
                color: var(--text);
                font-weight: bold;
                font-size: 1.15rem;
                opacity: 0.9;
            }

            .footerImg {
                width: 37px;
                height: 37px;
                margin-right: 8px;
            }

            .footerLegal {
                margin-top: 6px;
                font-size: 0.85rem;
                color: #A3A3A3;
            }

        `}</style>
    </>
)

export default FooterInfo