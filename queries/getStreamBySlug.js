import { gql } from '@apollo/client';

export const GetStreamBySlug = gql`
  query ($slug: String) {
    LiveEvent(slug: $slug) {
      _id
      title
      _slug
      cover {
        url(width: 1920)
      }
      speakers {
        _id
        __typename
        bio
        full_name
        profile_pic {
          url(preset: "Mobile")
        }
      }
      heading
      live_stream_intro
      live_stream {
        _id
        playback_id
      }
      start_day_and_time
    }
  }
`;
