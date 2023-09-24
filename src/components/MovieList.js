import  { useState } from 'react';

import Movie from './Movie';

export default function MovieList(props) {
      


    const movies = [
        {
            Id: 0,
            Img: "https://gifdb.com/images/high/howl-s-moving-castle-wizard-howl-flying-jamugd4e9ybncq8v.gif",
            Title: "Howl's Moving Castle [Fantasy/Adventure]",
            Year: "June 17, 2005",
            Bio: "Sophie has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl, who lives in a magical flying castle. However, the evil Witch of Waste takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.",
            Reviews: [{
                Name: "",
                Review: "",
                Rating:"1"
                
            }],
            
        },
        {
            Id: 1,
            Img: "https://i.pinimg.com/originals/96/18/6b/96186b308addc3c4700a26adb3aac278.gif",
            Title: "Spirited Away   [Fantasy/Adventure]  ",
            Year: "20 July 2001",
            Bio: "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.",
            Reviews: [{
                Name: "",
                Review: "",
                Rating:"1"
                
            }],
        },
        {
            Id: 2,
            Img: "https://i.pinimg.com/originals/b7/33/08/b7330810b9b436e8419224857981dfd3.gif",
            Title: "My Neighbor Totoro [Fantasy/Animation]",
            Year: "1988",
            Bio: "This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.",
            Reviews: [{
                Name: "",
                Review: "",
                Rating:"1"
                
            }],
        },
        {
            Id: 3,
            Img: "https://media1.giphy.com/media/3o6Ztaj8KHCx07iFpK/giphy.gif?cid=ecf05e47gbm9qyccb4c2nugz6tj41x8vj9a8f0y9oujp2w3l&ep=v1_gifs_related&rid=giphy.gif&ct=g",
            Title: "Princess Mononoke [Adventure/Fantasy]",
            Year: "July 12, 1997",
            Bio: "In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.",
            Reviews: [{
                Name: "",
                Review: "",
                Rating:"1"
                
            }],
        }
    ]
    const [reviewlist, setreviewlist] = useState([{ Id:0, author:"net ninja",movieId:2 }])
    
    return (
        <div>
            <Movie movies={movies} reviewlist={reviewlist} />
            <p>
                {props.movie}
            </p>
        </div>
    
    )
}