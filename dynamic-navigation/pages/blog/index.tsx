import type { NextPage } from "next";
import Link from "next/link";

const index: NextPage = () => {
	return (
		<div>
			<h1>This is the Blog page</h1>
			<ul>
				<li>
					<Link href='/blog/2021-01-01/happy-new-year'>
						<a>Read post</a>
					</Link>
				</li>

				<li>
					<Link href='/blog/2021-03-05/match-update'>
						<a>Read post</a>
					</Link>
				</li>
				<li>
					{/* If we are building complex URLs, we can also pass an object to the href prop: */}
					<Link
						href={{
							pathname: "/blog/[date]/[slug]",
							query: {
								date: "2020-01-06",
								slug: "Happy-new-year",
								foo: "bar",
							},
						}}
					>
						<a>Read post</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default index;
