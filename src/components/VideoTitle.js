const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-44 px-12">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          Play
        </button>
        <button className="mx-3 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
