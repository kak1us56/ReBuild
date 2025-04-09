import Head from "next/head";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>ReBuildUa</title>
                <link rel="shortcut icon" href="/logo-icon.png" type="image/x-icon" />
            </Head>
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}