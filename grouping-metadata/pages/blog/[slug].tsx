import PostHead from "../../component/PostHead";
import posts from "../../data/posts";
import { GetServerSideProps } from "next";
import type { NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { slug }: any = context.params;
	//https://linguinecode.com/post/how-to-solve-typescript-possibly-undefined-value
	const post: any = posts.find((p: any) => p.slug === slug)!;
	return {
		props: {
			post,
		},
	};
};
const MyPost: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
	const post: any = props.post;
	return (
		<div>
			<PostHead {...post} />
			<h1>{post.title}</h1>
			<p>{post.subtitle}</p>
		</div>
	);
};

export default MyPost;
