import Head from "next/head";


export default function Layout({children}) {

    return(
    <>
        <Head>
            <title>ToDo</title>
        </Head>
        <div className={`bg-white flex flex-col min-h-screen`}>
            <main className="flex-auto min-h-screen">{children}</main>
        </div>
    </>
    );
};
