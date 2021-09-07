import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from'../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import startFull from '../img/star-full.png';


const GameDetail=({pathId})=>{
 const history=useHistory();
  
 const exitDetailHandler=(e)=>{
    const element = e.target;
    if(element.classList.contains('shadow')){
     document.body.style.overflow='auto';
     history.push('/');
    }
  }

  const getPlatform =(platform)=>{
    switch(platform){
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return  steam;
      case 'Nintendo Switch':
        return nintendo;
      case   'iOS':
        return apple; 
       default:
         return gamepad;     
    };
  }

  const getStars=()=>{
    const star=[];
    const rating =Math.floor(game.rating);
    for(let i=1; i<=5; i++){
      if(i<=rating)
        star.push(<img key={i} alt='star' src={startFull} />);
      else  star.push(<img key={i} alt='star' src={starEmpty} />); 
    }
    return star;
   }

  const {game, screen,isLoading} =useSelector((state)=>state.detail);
  
  

  return(
   
    <>
    {!isLoading && (
<CardShadow className='shadow' onClick={exitDetailHandler}>
 <Detail layoutId={pathId}>
   <Stats>
      <div className="rating">
        <motion.h3 layoutId={`title${pathId}`}>{game.name}</motion.h3>
        <p>Rating: {game.rating}</p>
        {getStars()}
      </div>
      <Info>
        <h3>Platform</h3>
       <Platforms>
          {game.platforms.map(data=>(
            <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={game} />
          ))}
        </Platforms>
        </Info>
      </Stats>
    <Media>
      <motion.img layoutId={`image${pathId}`} src={smallImage(game.background_image,1280)} alt='game' />
      </Media>
    <Description>
      <p>{game.description_raw}</p>
      </Description>
    <div className="gallary">
      {screen.results.map(s=>(
        <img key={s.id} src={smallImage(s.image,1280)} alt='game'/>
      ))}
    </div>
    </Detail>
  </CardShadow>)}
  </>
  );
}


const CardShadow =styled(motion.div)`
width:100%;
min-height:100vh;
overflow-y:scroll;
background: rgba(0,0,0,0.5);
position:fixed;
top:0;
left:0;
z-index:5;
&::-webkit-scrollbar{
 width:0.5rem;

}
&::-webkit-scrollbar-thumb{
 background-color: #ff7676;
 
}
&::-webkit-scrollbar-track{
 background: white;
 
}
`;

const Detail=styled(motion.div)`
width:80%;
border-radius: 1rem;
padding:2rem 5rem;
background: white;
position: absolute;
left:10%;
color:black;
img{
  width:100%;
}

`;


const Stats = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
img{
  width:2rem;
  height: 2rem;
  display: inline;

}

`;

const Info=styled(motion.div)`
text-align: center;
`;

const Platforms =styled(motion.div)`
display: flex;
justify-content: space-evenly;
img{
  margin-left:3rem;
}
`;

const Media =styled(motion.div)`
margin-top:5rem;
img{
  width:100%;
  
}
`;

const Description = styled(motion.div)`
margin: 5rem 0;
`;
export default GameDetail;