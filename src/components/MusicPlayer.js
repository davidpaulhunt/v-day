function MusicPlayer() {
  return (
    <div className="flex-1 flex flex-col items-center">
      <p className="text-xl">
        Let's start with a song that says everything I want to say to you but better 👇🏻 🎵
      </p>
      <br />
      <iframe
        src="https://open.spotify.com/embed/track/3U4isOIWM3VvDubwSI3y7a?utm_source=generator"
        width="100%"
        height="152"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="object-none object-center"
        style={{
          maxWidth: "500px"
        }}
      />
    </div>
  );
}

export default MusicPlayer;
