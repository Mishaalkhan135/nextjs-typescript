import type { NextPage } from "next";
import { useMemo } from "react";
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCache,
	NormalizedCacheObject,
} from "@apollo/client";

let uri = "https://rwnjssignbook.herokuapp.com/v1/graphql";
let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: new HttpLink({ uri }),
		cache: new InMemoryCache(),
	});
}

const index: NextPage = () => {
	return <div>index</div>;
};

export default index;
