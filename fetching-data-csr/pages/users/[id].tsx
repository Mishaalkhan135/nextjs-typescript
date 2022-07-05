import { useState, useEffect } from "react";
import Link from "next/link";
import type { NextPage, GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";

interface Props extends ParsedUrlQuery {
	id: string;
}

interface post {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	console.log("Post");

	const { id } = context.params as Props;
	const req = await fetch("https://jsonplaceholder.typicode.com/photos");
	const users = await req.json();
	const post = users.filter((post: post) => post.id === parseInt(id))[0];
	return {
		props: {
			post,
		},
	};
};

interface User {
	title: string;
	url: string;
}

const UserData: NextPage<{ post: post }> = ({ post }) => {
	console.log(post);

	if (post) {
		return (
			<div style={{ display: "flex" }}>
				<img src={`${post.url}`} alt='logo' width={150} height={150} />
				<div>
					<b>Title: {post.title}</b>
				</div>
			</div>
		);
	} else {
		return <p>Waiting for post</p>;
	}
};
// interface Props {
// 	title: string;
// }
// const UserPage: NextPage<Props> = (props: Props) => {
// 	const title = props.title;
// 	const [loading, setLoading] = useState<boolean>(true);
// 	const [data, setData] = useState<post[]>([]);

// 	const getUserData = async () => {
// 		const req = await fetch(`https://jsonplaceholder.typicode.com/photos`);
// 		const data: post[] = await req.json();
// 		setLoading(false);
// 		setData(data);
// 	};

// 	useEffect(() => {
// 		//console.log("useEffect Called");
// 		getUserData();
// 	}, []);

// 	return (
// 		<div>
// 			<div>
// 				<Link href='/' passHref>
// 					Back to home
// 				</Link>
// 			</div>
// 			<hr />
// 			{loading && <div>Loading user data...</div>}

// 			{/* {data && <UserData user={data} />} */}
// 		</div>
// 	);
// };

export default UserData;
