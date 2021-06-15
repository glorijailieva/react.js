import React from 'react';
import {Movies} from './Movies';

let movie1={
  name:"Joker",
  genre:"Crime",
  date:2019,
  plot:"In 1981, party vlown and aspiring stand-up comedian Arthur Fleck lives with his moter , Penny, which is rife with crime and unemployment.",
  link:<a href="https://www.imdb.com/title/tt7286456/" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://pyxis.nymag.com/v1/imgs/0a8/5d1/3139b0b2fc427ff34fe5394bd1625d8527-2019-critics-joker.rsquare.w1200.jpg" width="100px" height="auto" alt="Not Found"></img>
}


let movie2={
  name:"Tangled",
  genre:"Family , Musical",
  date:2020,
  plot:"Beautiful princess Rapunzel has been locked away in a tower since she was captured as a baby by an old hag.",
  link:<a href="https://www.imdb.com/title/tt0398286/" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg" width="100px" height="auto" alt="Not Found"></img>
}

let movie3={
  name:"Casino Royale",
  genre:"Adventure, Action",
  date:2006,
  plot:"The plot as Bond on an assignment to bankrupt terrorist financier Le Chiffre in a high-stakes poker game at the Casino Royale in Montenegro",
  link:<a href="https://www.imdb.com/title/tt0381061/" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://i.ytimg.com/vi/KokmzxszDow/maxresdefault.jpg" width="100px" height="auto" alt="Not Found"></img>
}

let movie4={
  name:"Shooter",
  genre:"Action, Thriller",
  date:2007,
  plot:"A top Marine sniper Bob Lee Swagger, leaves the military after a mission goes horribly  awry and disappears without a trace",
  link:<a href="https://www.imdb.com/title/tt0822854/" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://flxt.tmsimg.com/assets/p23343_p_v10_ab.jpg" width="100px" height="auto" alt="Not Found"></img>
}

let movie3={
  name:"Inception",
  genre:"Adventure, Sci-fi",
  date:2010,
  plot:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  link:<a href="https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg" width="100px" height="auto" alt="Not Found"></img>
}
let movies=[movie1,movie2,movie3,movie4,movie5]

export function App (){
  return(
    <Movies movies={movies}/>
  )
}
