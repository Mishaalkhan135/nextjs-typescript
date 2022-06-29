import type { NextPage, GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { name } = context.params;
	return {
		props: {
			name,
		},
	};
};

const NamePage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
	return (
		<div>
			<h1>Hello, {props.name}!</h1>
		</div>
	);
};
export default NamePage;
