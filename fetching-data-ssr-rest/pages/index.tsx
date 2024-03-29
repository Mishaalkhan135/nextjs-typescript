import { useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface Props {
	users: [User];
}

interface User {
	id: string;
	username: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const usersReq = await axios.get("https://api.rwnjs.com/04/users");
	return {
		props: {
			users: usersReq.data,
		},
	};
};

const Home: NextPage<Props> = (props: Props) => {
	let users = props.users;
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

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href='https://nextjs.org'>Next.js!</a>
				</h1>

				{users.map((user: User) => (
					<div className={styles.grid}>
						<Link
							key={user.id}
							href={`/users/${user.username}`}
							className={styles.card}
						>
							<h2> {user.username} &rarr;</h2>
						</Link>
					</div>
				))}
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
