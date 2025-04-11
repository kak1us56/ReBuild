import Head from "next/head"
import { Footer } from "../components/footer"
import { HeaderCabinet } from "../components/header-cabinet"
import { MainCabinet } from "../components/main-cabinet"

export default function CabinetPage() {
    return (
        <>
            <Head>
                <title>ReBuildUa</title>
                <link rel="shortcut icon" href="/logo-icon.png" type="image/x-icon" />
            </Head>
            <div>
                <HeaderCabinet />
                <MainCabinet />
                <Footer />
            </div>
        </>
    )
}