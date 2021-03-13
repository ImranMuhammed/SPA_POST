import React from 'react'
import styled from 'styled-components'

const Icon=styled.button`
    width: 15%;
    height:100%;
    padding: 10px;
    background: #2196F3;
    opacity:1;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
    outline-width:0;
`
const SearchBox=styled.input`
    height:100%;
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    width: 70%;
    background: white;
    outline-width:0;
`

const Container=styled.div`
    display:flex;
    justify-content:center;
    padding:0;
    border:1px solid black;
    background-color:rgba(0,0,250,0.1);
    border-radius:10px;
`
const SubContainer=styled.div`
    align-items:center;
    text-align:center;
    width:400px;
    padding:0;
    margin:1rem ;
    
`

export default function SearchContainer(props) {


    return (<Container>
                <SubContainer>
                    <Icon className="glyphicon glyphicon-search" onClick={(e)=>{props.dispatch({type:"SEARCH",text:props.searchedText})}}></Icon>
                    <SearchBox 
                        value={props.searchedText}
                        onChange={(e)=>{props.dispatch({type:"SEARCH",text:e.target.value})}}
                    />
                    <Icon className="glyphicon glyphicon-remove" onClick={()=>{props.dispatch({type:"SHOW_POSTS",})}} ></Icon>
                </SubContainer>
            </Container>
    )
}
