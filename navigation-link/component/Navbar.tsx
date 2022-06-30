import type { NextPage } from "next";
import Link from "next/link";

import type { NextComponentType, NextPageContext } from "next";
interface Props {}
const Component: NextComponentType<NextPageContext, {}, Props> = () => {
	return (
		<div>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about' prefetch={false}>
				<a>Home</a>
			</Link>
			<Link href='/contact'>
				<a>Home</a>
			</Link>
		</div>
	);
};
export default Component;
