import { gql } from '@apollo/client';

export const GetNavigation = gql`
  {
    Navigation(slug: "top-navigation") {
      _id
      title
      menu_items {
        __typename
        title
        _slug
        _id
        children {
          _id
          title
          icon {
            url
          }
        }
      }
    }
  }
`;
