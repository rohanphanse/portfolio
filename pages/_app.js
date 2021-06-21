import Metadata from "../components/Metadata.js"

import "../styles/global.css"
import "prismjs/themes/prism-tomorrow.css"

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Metadata></Metadata>
            <Component {...pageProps}></Component>
        </>
    )
}

export default App