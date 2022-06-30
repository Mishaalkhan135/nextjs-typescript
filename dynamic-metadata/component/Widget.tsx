import { useState } from "react";
import Head from "next/head";

import type { NextComponentType, NextPageContext } from "next";
interface Props {
	pageName: string;
}
const Widget: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	const [active, setActive] = useState(false);
	if (active) {
		return (
			<div>
				<Head>
					<title>You are browsing the {props.pageName} page</title>
				</Head>
				<button onClick={() => setActive(false)}>
					Restore origin title
				</button>
				Take a look at the title
			</div>
		);
	}
	return (
		<div>
			<button onClick={() => setActive(true)}>Change page title</button>
		</div>
	);
};
export default Widget;
