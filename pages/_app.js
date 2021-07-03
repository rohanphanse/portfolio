import Metadata from "../components/Metadata.js"

import "prismjs/themes/prism-tomorrow.css"
import "../styles/global.css"

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Metadata></Metadata>
            <Component {...pageProps}></Component>
        </>
    )
}

export default App
