import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, title = '', description = '' }) => {
    return (
        <>
            <Head>
                <title>{`Cristhian Sevilla - ${title}`}</title>
                <meta name="description" content={description} />
                <meta name="author" content="Cristhian Sevilla" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Cristhian Sevilla" />
                <meta name="twitter:url" content="https://cristhiansevilla.com" />
                <meta name="twitter:image" content="https://cristhiansevilla.com/imagenes/thumbnail.jpeg" />
                <meta name="twitter:image:type" content="image/png" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
            </Head>

            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout