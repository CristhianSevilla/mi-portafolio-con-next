import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
import Header2 from "./header2"

const Layout = ({ children, title = '', description = '' }) => {
    return (
        <>
            <Head>
                <title>{`Cristhian Sevilla - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>

            {/* <Header2 /> */}
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout