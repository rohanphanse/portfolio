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
                    padding: 40px 20px;
                }
            `}</style>
        </>
    )
}

export default Layout