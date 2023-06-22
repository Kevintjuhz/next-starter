import { gql } from '@apollo/client';

export const GetPageBySlug = gql`
  query ($slug: String, $segment: String!) {
    Page(slug: $slug) {
      _id
      title
      _slug
      stack(personalize_for_segments: [$segment]) {
        __typename
        ... on PageHeader {
          heading
          cta_url
          cta_label
          image {
            name
            url(width: 1600)
          }
          _id
          text
        }
        ... on ArticleCollection {
          _id
          articles {
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
                original_name
              }
              _read_time
              _created_on
              _publish_on
            }
            _publish_on
            content {
              ... on Text {
                body
              }
            }
          }
          heading
          cta_label
          cta_url
          description
        }
        ... on ImageAndText {
          image {
            name
            url(width: 800)
          }
          text
          title
          image_position
          _id
        }
        ... on ProductCollection {
          heading
          description
          cta_url
          cta_label
          products {
            price
            title
            image
            description
          }
        }
        ... on CallToAction {
          background_image {
            url(width: 1600)
          }
          cta_label
          description
          heading
        }
      }
    }
  }
`;
