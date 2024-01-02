import airport from "images/airport.JPG"
import bham3 from "images/bham3.JPG"
import david from "images/david.JPG"
import fakeus from "images/fakeus.JPG"
import garden from "images/garden.JPG"
import stevie from "images/stevie.JPG"
import stevie2 from "images/stevie2.JPG"
import us10 from "images/us10.JPG"
import watermelon from "images/watermelon.JPG"
import zoo from "images/zoo.JPG"
import us1 from "images/us1.JPG"
import us2 from "images/us2.JPG"
import us3 from "images/us3.JPG"
import bham1 from "images/bham1.JPG"
import bham2 from "images/bham2.jpg"
import text1 from "images/text1.PNG"
import text2 from "images/text2.PNG"
import castle from "images/castle.PNG"
import castle2 from "images/castle2.PNG"
import escape from "images/escape.PNG"
import library from "images/library.PNG"
import nature from "images/nature.PNG"
import river from "images/river.PNG"
import tinder from "images/tinder.PNG"
import dessert from "images/dessert.PNG"
import david2 from "images/david2.PNG"

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

const images = shuffle([
  castle,
  castle2,
  escape,
  library,
  nature,
  river,
  tinder,
  airport,
  bham3,
  david,
  fakeus,
  garden,
  stevie,
  bham1,
  us1,
  us2,
  us3,
  bham2,
  us10,
  watermelon,
  zoo,
  stevie2,
  text1,
  text2,
  dessert,
  david2,
]);

const songs = shuffle([
  "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v?utm_source=generator",
  "https://open.spotify.com/embed/track/0cVyQfDyRnMJ0V3rjjdlU3?utm_source=generator",
  "https://open.spotify.com/embed/track/2LBqCSwhJGcFQeTHMVGwy3?utm_source=generator",
  "https://open.spotify.com/embed/track/6Qyc6fS4DsZjB2mRW9DsQs?si=b9d3c02e6ff24b24",
]);

const Song = ({ src }) => (
  <iframe
    src={src}
    width="100%"
    height="353"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    className="object-none object-center"
    style={{
      maxWidth: "500px"
    }}
  />
);

export default function Gallery() {
  return (
    <div className="container flex flex-col gap-y-4">
      <p className="text-xl">
        Speaking 🗣️ of looks, here are some of my favorite moments of our first year together 📸
      </p>
      <div className="columns-3xs gap-8 space-y-8">
        {
          images.slice(0, 3).map((image, i) => (
            <img key={i} src={image} className="w-full object-cover rounded-lg" />
          ))
        }
        <Song src={songs[0]} />
        {
          images.slice(3, 13).map((image, i) => (
            <img key={i} src={image} className="w-full object-cover rounded-lg" />
          ))
        }
        <Song src={songs[1]} />
        {
          images.slice(13, 19).map((image, i) => (
            <img key={i} src={image} className="w-full object-cover rounded-lg" />
          ))
        }
        <Song src={songs[2]} />
        {
          images.slice(19).map((image, i) => (
            <img key={i} src={image} className="w-full object-cover rounded-lg" />
          ))
        }
        <Song src={songs[3]} />
      </div>
    </div>
  )
}