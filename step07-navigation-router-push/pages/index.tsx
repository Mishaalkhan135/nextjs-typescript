import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PrivateComponent from "../component/PrivateComponent";

const Home: NextPage = () => {
	const router = useRouter();
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (!loggedIn) {
			router.push({
				pathname: "/login",
				query: {
					date: "2021-01-01",
					slug: "happy-new-year",
					foo: "bar",
				},
			});
		}
	}, [loggedIn]);
	return loggedIn ? <PrivateComponent /> : null;

	// return (
	// 	<div className={styles.container}>
	// 		<Head>
	// 			<title>Create Next App</title>
	// 			<meta
	// 				name='description'
	// 				content='Generated by create next app'
	// 			/>
	// 			<link rel='icon' href='/favicon.ico' />
	// 		</Head>
	// 		<h1>Navigation Routing Push</h1>
	// 	</div>
	// );
};

export default Home;
