import React from 'react'
import {ButtonContainer} from './ButtonContainer'
import Body from './Body'
import styled from 'styled-components'
import { Button } from './Button'
import { useReducer } from 'react'
import { useEffect } from 'react'
import NewPost from './NewPost'
import SearchContainer from './SearchContainer'

const MainContainer=styled.div`
    margin:1rem auto;
    width:80%;
    height:75vh;
`

const postsReducer=(state,action)=>{
    switch(action.type){
        case 'ADD': return {posts: [...state.posts, action.newPost], searchedText:"" }  
        case 'GET_ALL':  return {posts:action.posts, searchedText:""}
        case 'OPEN_FORM': return{...state, showForm:true,searchedText:""}
        case 'SHOW_POSTS': return{...state, showForm:false,searchedText:""}
        case 'SEARCH' :    return {...state, searchedText:action.text}
        case 'SEARCHED_POST' : return {...state, filteredPosts:action.posts}
        default : return state;
    }
}

const initialState={
    posts:[],
    showForm:false,
    searchedText:'',
    filteredPosts:[]
}

export default function HomeScreen() {
    const[state,dispatch]=useReducer(postsReducer,initialState);
    const{posts,showForm,searchedText,filteredPosts}=state;

     useEffect(()=>{
        const fetchData=()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data) => data.json())
            .then((data) =>{ 
                dispatch({type:"GET_ALL", posts:data.slice(0,5) })} );          
        }
        fetchData()
    },[])

    useEffect(()=>{
        if(searchedText!==""){
            const matchedPosts=posts.filter(post=> post.title.toLowerCase().includes(searchedText.toLowerCase()) || post.body.toLowerCase().includes(searchedText.toLowerCase()));
            dispatch({type:"SEARCHED_POST", posts:matchedPosts})
        }
    },[searchedText])
    
    return (
        <MainContainer>
           {!showForm && <SearchContainer dispatch={dispatch} searchedText={searchedText} />  } 

            <ButtonContainer>
                <Button variant="primary" onClick={()=>dispatch({type:"OPEN_FORM",})} > New Post</Button>
                <Button variant="primary" onClick={()=>dispatch({type:"SHOW_POSTS",})} > Published </Button>
            </ButtonContainer>

                {
                    showForm? <NewPost dispatch={dispatch}  />
                    :
                    searchedText==="" ?
                    <Body posts={posts} />
                    :
                    <Body posts={filteredPosts} />
                    
                }      

        </MainContainer>
    )
}
