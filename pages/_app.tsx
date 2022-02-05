import "../styles/globals.css";
import type { AppProps } from "next/app";
import path from "path";
import Head from "next/head";
let basePath = process.cwd();
if (process.env.NODE_ENV === "production")
	basePath = path.join(process.cwd(), ".next/server/chunks");
path.resolve(process.cwd(), "fonts", "fonts.conf");
path.resolve(process.cwd(), "fonts", "SFPRODISPLAYREGULAR.OTF");

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='bg-background text-white tracking-wider h-screen w-full font-sfPro'>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
