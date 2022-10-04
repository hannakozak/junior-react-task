import { gql } from '@apollo/client';

export const categoryProductsQuery = gql`
  query ($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        id
        name
        brand
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
