import "../styles/globals.css";
import type { AppProps } from "next/app";
import path from 'path';

path.resolve(process.cwd(), 'fonts', 'fonts.conf');
path.resolve(process.cwd(), 'fonts', 'SF-Pro-Rounded-Medium.otf');
path.resolve(process.cwd(), 'fonts', 'SFPRODISPLAYREGULAR.OTF');

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='bg-background text-white tracking-wider h-screen w-full'>
				<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
