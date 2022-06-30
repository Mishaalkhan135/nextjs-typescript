import type { NextComponentType, NextPageContext } from "next";
interface Props {}
const PrivateComponent: NextComponentType<NextPageContext, {}, Props> = () => {
	return (
		<div>
			<h1>This is an private component</h1>
		</div>
	);
};
export default PrivateComponent;
