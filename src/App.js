import './style.css'
import React, {useEffect, useState} from 'react';
import Header from './components/Header.js'
import CatCardContainer from './components/CatCardContainer';

function App() {
  
  const [catIDs, setCatIDs] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  const [catLinks, setCatLinks] = useState(["https://i.kym-cdn.com/entries/icons/original/000/041/742/cover3.jpg", 
  "https://gamebanana.com/mods/embeddables/396487?variant=sd_image",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66RY124yRI1uOHfJxVSUdcajOQhPCBoYIuA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_CcrjzGmnIJ7aFPfZTaSv3qDva7bo9iPMQ&usqp=CAU", 
  "https://pyxis.nymag.com/v1/imgs/d29/4a6/d8b19f15856697769dc1c586d59ce82bd8-22-cat-video-truth-smoking.rsquare.w700.jpg",
  "https://thumbs.dreamstime.com/b/become-stupid-cat-7444226.jpg",
  "https://steamuserimages-a.akamaihd.net/ugc/1865080698191321955/D7CAB4B0707CDB4F0AFA9353806D6F5690D06391/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5DAiVnjs047ZUbzabafla2k6SNKaScfMTA&usqp=CAU",
  "https://global.discourse-cdn.com/business7/uploads/mst3k/original/3X/f/4/f4568d422a6c0ec14a0567d726b1ac9096212c2a.jpeg",
  "https://i.imgflip.com/3eajmy.jpg",
  "https://www.verdict.co.uk/wp-content/uploads/2022/08/shutterstock_1789738832.jpg",
  "https://i.pinimg.com/736x/02/90/85/029085e9daa7a3270e4f963811513acb.jpg",
  "https://gamebanana.com/wips/embeddables/70549?variant=sd_image",
  "https://i.imgflip.com/70mbv9.jpg?a466056",
  "https://image.slidesharecdn.com/sillycatvideosyoutube-150909144555-lva1-app6891/85/silly-cat-videos-youtube-1-638.jpg?cb=1670356088",
  "https://i1.sndcdn.com/artworks-000298749006-5gqxt7-t500x500.jpg"])
  const [previouslyClicked, setPreviouslyClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  function clickHandler(l) {
    setPreviouslyClicked(previouslyClicked.concat(l))

    

    for (let i = 0; i < previouslyClicked.length; i++) {
      if (previouslyClicked[i] == l) {
        setScore(0);
        setPreviouslyClicked([]);
        return "done";
      }
    }

    

    shuffle(catIDs, catLinks)

    if (score >= highestScore) {
      setHighestScore(score + 1)
    }

    setScore(score + 1);

    console.log(score)
    console.log(highestScore)
  }

  let l = -1;

  function shuffle(array, array2) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array2[currentIndex], array[randomIndex], array2[randomIndex]] = [
        array[randomIndex],array2[randomIndex], array[currentIndex], array2[currentIndex]];
    }
  
    return [array, array2];
  }


  useEffect(() => {
    l = -1
    if(previouslyClicked.length == catIDs.length) {
      setPreviouslyClicked([])
    }
  })


  return (
    <div className="App">
      <Header score={score} highestScore={highestScore}/>
      <div className="catContainer">
        {catIDs.map((cats) => {
          l++;
          return <div className="card" onClick = {() => {
            clickHandler(cats)
          }}id={cats}>
                  <img src={catLinks[l]}/>
                </div>
        })}
      </div>
    </div>
  );
  
}

export default App;
