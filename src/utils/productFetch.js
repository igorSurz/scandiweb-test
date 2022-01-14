import { gql } from '@apollo/client';
import { client } from './apolloClient';

export function productFetch(id) {
	return client.query({
		query: gql`
				query GetRates {
					product(id: "${id}") {
						id
						name
						gallery
						description
						attributes {
						id
						name
						type
						items {
							displayValue
							value
							id
							
						}
						}
						prices{
						currency{
							label
							symbol
						}
						amount
						
						}
						brand
								}
							}
						`
	});
}