import { gql } from '@apollo/client';

export const categoryProductsQuery = gql`
  query ($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        name
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        inStock
        gallery
      }
    }
  }
`;
