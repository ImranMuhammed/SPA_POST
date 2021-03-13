
import styled from 'styled-components';

export const PostMainContainer=styled.div`
    width:100%;
    height:100%;
    border:1px solid black;
    overflow-y:auto;
    background-color:rgba(90,90,90,0.1);
    padding:auto;
    &::-webkit-scrollbar{
        display:none;
    }
    border-radius:10px;
`

export const PostContainer=styled.div`
    margin:auto ;
    border:1px solid black;
    padding:0 10px;
    width:100%;
    height:15rem;
    display:flex;
    flex-direction:column;
    cursor: pointer;
    overflow:hidden;   
    &:nth-child(odd){
        background-color:rgba(120,120,120,0.2);
    }
    &:nth-child(even){
        background-color:white;
    }
`

export const PostTitle=styled.h2`
    &::first-letter {
        text-transform:uppercase
    }
`

export const PostBody=styled.p`
    margin-top:-1rem;
    text-indent:80px;
    &::first-letter {
        text-transform:uppercase
    }
`