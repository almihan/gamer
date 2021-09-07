import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from '../img/logo.png';
import { fetchSearch,clearSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav =()=>{
  const dispatch= useDispatch();
  const [textInput,setInput] =useState('');
  
  const inputHandler =(e)=>{
  setInput(e.target.value);
  }
 const submitSearch=(e)=>{
   e.preventDefault();
   dispatch(fetchSearch(textInput));
   setInput('');
 }

 const clearSearchHandler=()=>{
     dispatch(clearSearch());
 }
  return (
<StyledNav variants={fadeIn} initial='hidden' animate='show'>
  <Logo onClick={clearSearchHandler}>
<img src={logo} alt='logo'/>
<h1>Games</h1>
  </Logo>
  <form className="search">
    <input onChange={inputHandler} value={textInput} type='text' />
    <button onClick={submitSearch} type='submit'>Search</button>
  </form>
</StyledNav>
  );
}

const StyledNav =styled(motion.nav)`
padding:3rem 5rem;
text-align: center;
input{
  width:30%;
  font-size: 1.5rem;
  padding:0.5rem 2rem;
  border:none;
  margin-top:1rem;
  box-shadow:0px 0px 30px rgba(0,0,0,0.2) ;
}
button{
  font-size:1.5rem;
  border:none;
  padding:0.5rem 2rem;
  cursor: pointer;
  background:#ff7676 ;
  color:white;
}
`;

const Logo =styled(motion.div)`
display: flex;
justify-content: center;
padding:1rem;
cursor: pointer;
img{
  width:3rem;
  height: 3rem;
}
`;

export default Nav;