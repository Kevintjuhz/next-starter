import { gql } from '@apollo/client';

export const GetCategories = gql`
  {
    Categories {
      items {
        _id
        _slug
        icon {
          url
        }
        title
      }
    }
  }
`;
