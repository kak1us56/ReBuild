import Head from "next/head";
import { HeaderList } from "../components/header-list/header-list";
import { MainList } from "../components/main-list";
import { Footer } from "../components/footer";

export default function ListPage() {
    return (
        <>
            <Head>
                <title>ReBuildUa</title>
                <link rel="shortcut icon" href="/logo-icon.png" type="image/x-icon" />
            </Head>
            <div>
                <HeaderList />
                <MainList />
                <Footer />
            </div>
        </>
    )
}