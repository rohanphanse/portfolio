import Metadata from "../components/Metadata.js"
import "../styles/global.css"


const App = ({ Component, pageProps }) => {
    return (
        <>
            <Metadata></Metadata>
            <Component {...pageProps}></Component>
            <script src="/prism/prism.js"></script>
        </>
    )
}

export default App