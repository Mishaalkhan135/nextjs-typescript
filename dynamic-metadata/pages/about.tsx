import Link from "next/link";
import Widget from "../component/Widget";

const about = () => {
	return (
		<div>
			<Widget pageName='About Page' />
			<Link href='/'>
				<a>Home Page</a>
			</Link>
		</div>
	);
};

export default about;
