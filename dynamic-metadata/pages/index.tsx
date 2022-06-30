import type { NextPage } from "next";
import Head from "next/head";
import Widget from "../component/Widget";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Home Page</h1>
			<Widget pageName='index' />
			<Link href='/about'>
				<a>About Page</a>
			</Link>
		</div>
	);
};

export default Home;
