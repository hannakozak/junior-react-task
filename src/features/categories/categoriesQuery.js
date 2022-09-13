import { gql } from '@apollo/client';

export const categoriesQuery = gql`
  query {
    categories {
      name
    }
  }
`;
