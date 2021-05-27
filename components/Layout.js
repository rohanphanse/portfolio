import Title from "./Title"
import NavBar from "./navbar/NavBar"
import Metadata from "./Metadata"
import Footer from "./footer/Footer"

const Layout = props => {
    return (
        <>
            <Metadata title = {props.page} />
            <Title />
            <NavBar />
            <div className = "content">{props.children}</div>
            <Footer />
            <style jsx>{`
                .content {
                    max-width: 1000px;
                    padding: 40px 20px;
                    margin: auto;
                }
            `}</style>
        </>
    )
}

export default Layout