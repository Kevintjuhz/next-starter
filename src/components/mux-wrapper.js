'use client';
import MuxPlayer from '@mux/mux-player-react';

export default function MuxWrapper({
  id,
  className,
  style,
  playbackId,
  metadataVideoId,
  loop,
  streamType,
  controls,
  autoplay,
  liveEvent,
  metadataVideoTitle,
  metadataViewerUserId,
}) {
  return (
    <MuxPlayer
      id={id}
      className={className}
      style={style}
      playbackId={playbackId}
      metadataVideoId={metadataVideoId}
      loop={loop}
      streamType={streamType}
      controls={controls}
      autoplay={autoplay}
      liveEvent={liveEvent}
      metadata-video-title={metadataVideoTitle}
      metadata-viewer-user-id={metadataViewerUserId}
    />
  );
}
