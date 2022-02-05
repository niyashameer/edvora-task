import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className=''>
			<Link href='/products'>
				<a>Kindly click here to move to the route</a>
			</Link>
		</div>
	);
};

export default Home;
