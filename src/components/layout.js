import Head from "next/head";
// import localFont from 'next/font/local';

// const myFont = localFont({
//     src: '../../public/fonts/Montserrat-Regular.ttf',
//     variable: '--font-mont'
//   });

export default function Layout({children}) {

    return(
    <>
        <Head>
            <title>NextJS Tailwind Starter</title>
        </Head>
        <div className={`bg-white flex flex-col min-h-screen`}>
            <main className="flex-auto min-h-screen">{children}</main>
        </div>
    </>
    );
};
