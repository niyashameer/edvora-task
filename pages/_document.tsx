import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preload'
						href='/fonts/SFPRODISPLAYREGULAR.otf'
						as='font'
						crossOrigin=''
					/>
					<link
						rel='preload'
						href='/fonts/SF-Pro-Rounded-Medium.otf'
						as='font'
						crossOrigin=''
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
