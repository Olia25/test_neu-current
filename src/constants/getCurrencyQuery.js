import { gql } from "@apollo/client";

export const getCurrencyQuery = gql`
  {
    currencies {
      _id
      value
      name
      code
      badge
    }
  }
`;
