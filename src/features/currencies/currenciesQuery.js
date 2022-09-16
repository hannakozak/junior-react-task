import { gql } from '@apollo/client';

export const currenciesQuery = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
