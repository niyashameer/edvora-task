import type { AppProps } from "next/app";
import path from "path";
import "../styles/globals.css";

let basePath = process.cwd();
if (process.env.NODE_ENV === "production")
	basePath = path.join(process.cwd(), ".next/server/chunks");
path.resolve(process.cwd(), "fonts", "fonts.conf");
path.resolve(process.cwd(), "fonts", "SFPRODISPLAYREGULAR.OTF");

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='bg-background text-white tracking-wider h-screen w-full'>
				<style jsx>{`
				 @font-face {
					font-family: sf-pro !important;
					src: '/assets/fonts/SFPRODISPLAYREGULAR.otf';
				  }
				  body{
					  font-family:sfpro;
				  }
			`}</style>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
