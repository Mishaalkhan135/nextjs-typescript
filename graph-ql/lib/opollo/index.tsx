import { useMemo } from "react";
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client";
import type { NextPage } from "next";
let uri = "https://api.spacex.land/graphql";
let apolloClient: ApolloClient<NormalizedCacheObject>;

// Creating an apollo-client function

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: new HttpLink({ uri }),
		cache: new InMemoryCache(),
	});
}

export function initApollo(initailState?: NormalizedCacheObject) {
	const client = apolloClient || createApolloClient();
	if (initailState != undefined) {
		client.cache.restore({
			...client.extract(),
			...initailState,
		});
	}
	if (typeof window === "undefined") {
		return client;
	}
	if (!apolloClient) {
		apolloClient = client;
	}
	return client;
}

export function useApollo(initailState: NormalizedCacheObject) {
	return useMemo(() => initApollo(initailState), [initailState]);
}
