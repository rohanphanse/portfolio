import Head from "next/head"

const Metadata = props => {
    return (
        <>
            <Head>
                <meta name = "viewport" content = "width = device-width, initial-scale = 1" />
                <meta name = "keywords" content = {props.keywords} />
                <meta name = "description" content = {props.description} />
                <meta charSet = "utf-8" />
                <link rel = "icon" href = "/images/logo.png" />
                <title>{props.title ? `${props.title} | Rohan Phanse` : "Rohan Phanse"}</title>
                <link href = "https://use.fontawesome.com/releases/v5.13.0/css/all.css" rel = "stylesheet" crossOrigin = "anonymous"></link>
                <link href="/prism/prism.css" rel="stylesheet" />
                <script src="/prism/prism.js"></script>
            </Head>
        </>
    )
}

export default Metadata