import { gql } from '@apollo/client';

export const categoryProductsQuery = gql`
  query ($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        id
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
        description
        category
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
        brand
      }
    }
  }
`;
