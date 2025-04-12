import Head from "next/head";
import { MapBg } from "../components/map";
import { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    const originalOverflow = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = originalOverflow;
    };
  }, []);

  return (
    <>
      <Head>
          <title>ReBuildUa</title>
          <link rel="shortcut icon" href="/logo-icon.png" type="image/x-icon" />
      </Head>
      <div>
        <MapBg />
        {/* <MapPopups /> */}
      </div>            
    </>
  )
}