import type { NextPage } from "next";
import Link from "next/link";
import path from 'path';

path.resolve(process.cwd(), 'fonts', 'fonts.conf');
path.resolve(process.cwd(), 'fonts', 'SFPRODISPLAYREGULAR.OTF');

const Home: NextPage = () => {
	return (
		<div className='font-sfPro'>
			<Link href='/products'>
				<a>Kindly click here to move to the route</a>
			</Link>
		</div>
	);
};

export default Home;
