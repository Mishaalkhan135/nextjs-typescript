import React from "react";
import { useQuery, gql } from "@apollo/client";

interface Country {
	name: string;
	code: string;
	emoji: string;
}
interface CountryData {
	countries: Country[];
}

const COUNTRIES_QUERY = gql`
	query Countries {
		countries {
			name
			code
			emoji
		}
	}
`;

const CountryList = () => {
	const { data, loading, error } = useQuery<CountryData>(COUNTRIES_QUERY);
	if (loading) return <p>Loading ...</p>;
	if (error) return <p> `Error! ${error.message}`</p>;
	return (
		<>
			<ul>
				{data?.countries.map((country: any, index: any) => (
					<li key={country.code}>
						<h1>{country.name}</h1>
						<p>
							{country.code} - {country.emoji}
						</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default CountryList;
