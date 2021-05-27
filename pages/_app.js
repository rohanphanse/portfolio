import Metadata from "../components/Metadata.js"
import "../styles/globals.css"


const App = ({ Component, pageProps }) => {
    return (
        <>
            <Metadata></Metadata>
            <Component {...pageProps}></Component>
        </>
    )
}

export default App