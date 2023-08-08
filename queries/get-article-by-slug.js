import { gql } from '@apollo/client';

export const GetArticleBySlug = gql`
  query ($slug: String) {
    Article(slug: $slug) {
      _id
      _slug
      title
      categories {
        icon {
          url
        }
        title
      }
      authors {
        _id
        full_name
        profile_pic {
          url
        }
        bio
      }
      content {
        __typename
        ... on Text {
          body
          text
          html
          format
          _id
        }
        ... on Quote {
          body
          author
        }
        ... on Assets {
          items {
            url(width: 1856, height: 960)
            caption
          }
        }
      }
    }
  }
`;
