import { gql } from 'apollo-angular';

export const GET_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      code
      name
      currency
      continent {
        name
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetACountry($codeName: ID!) {
    country(code: $codeName) {
      code
      name
      currency
      continent {
        name
      }
      languages {
        name
      }
      phone
      native
      emoji
    }
  }
`;
