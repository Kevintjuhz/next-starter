import { gql } from '@apollo/client';

export const GetArticles = gql`
  query ($where: ArticleWhereInput) {
    Articles(where: $where) {
      items {
        _id
        title
        excerpt
        cover {
          url(width: 384, height: 448)
        }
        _slug
        authors {
          _id
          full_name
          profile_pic {
            url
          }
          bio
        }
        _publish_on
        content {
          ... on Text {
            body
          }
        }
        categories {
          icon {
            url
          }
          title
          _slug
        }
      }
    }
  }
`;
