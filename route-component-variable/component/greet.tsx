import { useRouter } from "next/router";
import type { NextComponentType, NextPageContext } from "next";

interface Props {}
const Component: NextComponentType<NextPageContext, {}, Props> = () => {
	const { query } = useRouter();
	console.log(query);

	return (
		<div>
			<h1>Hello,{query.name}</h1>
		</div>
	);
};
export default Component;
