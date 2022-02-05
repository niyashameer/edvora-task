import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='bg-background text-white tracking-wider'>
			<Head>
				<link
					rel='preload'
					href='/assets/fonts/SFPRODISPLAYREGULAR.otf'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/assets/fonts/SF-Pro-Rounded-Medium.otf'
					as='font'
					crossOrigin=''
				/>
			</Head>
			<body>
				<Component {...pageProps} />
			</body>
		</div>
	);
}

export default MyApp;
