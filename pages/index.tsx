import type { NextPage } from "next";
import Link from "next/link";
import path from 'path';

path.resolve(process.cwd(), 'fonts', 'fonts.conf');
path.resolve(process.cwd(), 'fonts', 'SFPRODISPLAYREGULAR.OTF');

const Home: NextPage = () => {
	return (
		<div className='text-5xl flex justify-center items-center place-content-center text-center'>
			<Link href='/products'>
				<a className="w-max h-10">Kindly click here to move to the necessary route</a>
			</Link>
			<img src="/assets/images/Umbrella.jpg" alt="umberella" className="w-1/2 h-screen"/>
		</div>
	);
};

export default Home;
