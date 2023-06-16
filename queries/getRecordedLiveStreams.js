import { gql } from '@apollo/client';

export const GetRecordedLiveStreams = gql`
  query ($where: LiveEventWhereInput) {
    LiveEvents(where: $where) {
      items {
        _id
        _slug
        title
        cover {
          url(width: 1920)
        }
        start_day_and_time
        speakers {
          _id
          full_name
          profile_pic {
            url(preset: "Mobile")
          }
        }
        heading
        live_stream {
          cover(width: 384, height: 448)
        }
      }
    }
  }
`;
