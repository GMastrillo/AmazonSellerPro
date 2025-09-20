'use client';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  return (
    <div className="aspect-video w-full bg-black rounded-md flex items-center justify-center">
      <p className="text-white">Player de Vídeo para: {videoUrl}</p>
      {/* In a real app, you would use a video player component here */}
      {/* <ReactPlayer url={videoUrl} width="100%" height="100%" controls /> */}
    </div>
  );
};

export default VideoPlayer;
