import river2 from "images/river2.PNG"

export default function Letter() {
  return (
    <div className="container flex flex-1 pt-4 flex-col gap-y-4">
      <p className="text-xl text-left px-2 md:px-48">
        <span className="float-left">💌 Dear Stevie</span>
        <br />
        <br />
        No website can express how important you have become to me. I am so <b>grateful</b> to have you in my life 🙏. You are beautiful, kind, and loving beyond what anyone could ever ask for. You found me feeling inadquate and lonely, then filled me with love and validation.
        <br /><br />
        You have been incredibly kind and admired me in ways I didn't know I needed.

        Night after night, day after day, you have been the first and last thought on my mind 💤 🥰. I have never felt so loved and appreciated.

        You deserve as much kindness and love and approval as exists in the entire world 🌎.
        <br /><br />
        And you are <b>really funny</b>, too. 😜
        <br /><br />
        I hope you enjoy revisiting these memories as much as I did. I love you and can't wait to see you again 🏀.
        
        <br /><br />🎉 Happy Anniversary! 🎉
        <br />
        <br />
        <span className="float-right">❤️ Love, David 😘</span>
      </p>
      <p className="text-xl py-6">
        🌻 🇬🇧 🇺🇸 One more bright photo to show just how wonderful of a couple we make 👩🏼‍❤️‍👨🏻 🐝 🐶
      </p>
      <img src={river2} className="w-full object-cover rounded-lg md:max-w-screen-md self-center" />
      <p className="text-xl pt-6">
        🚨 And last but not least, the <b>most important</b> number of all... 💎
      </p>
      <h1 className="text-6xl capitalize">
        <span style={{
          fontFamily: 'Rubik Doodle Shadow',
          fontSize: '5rem',
        }}>&infin;</span> years to go
      </h1>
    </div>
  );
}
