import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import CountryList from "../components/CountryList";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<h1>Fetching data with graphQl</h1>
			<CountryList></CountryList>
		</div>
	);
};

export default Home;
