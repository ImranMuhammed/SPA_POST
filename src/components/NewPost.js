import React, { useReducer } from 'react'
import {InputComponent} from './InputComponent';
import { TextAreaComponent } from './TextAreaComponent';
import { Button } from './Button';
import {ErrorMessage} from './ErrorMessage';
import styled from 'styled-components'

const FormComponent=styled.form`
    margin:auto;
    display:flex;
    flex-direction:column;
    padding:3rem;
    width:100%;
    background-color:rgba(125,125,125,0.1)
`

const formReducer=(state,action)=>{
    switch(action.type){
        case 'field': return { ...state, [action.field]:action.value }
        case 'error': return {...state,  [action.field]:action.value, disabled:true }
        case 'submitForm': return {...state, disabled:false}
        default : return state;
    }
}

const initialState={
    title:"",
    description:"",
    disabled:true,
    titleError:"",
    descriptionError:""
}

export default function NewPost(props) {
   
     const[state,dispatch]=useReducer(formReducer,initialState);

     const{title,description,disabled,titleError,descriptionError }=state;

     const handleBlur=(e)=>{
        e.preventDefault();
        const {value,name}=e.target;
        if(value==="")
            dispatch({type:"error",field:`${name}Error`, value:`${name} is Required`})
        else
            dispatch({type:"error",field:`${name}Error`, value:""})
        if(title!=="" && description!=="")
            dispatch({type:"submitForm"})
     }

     const handleSubmit=()=>{
       props.dispatch({type:"ADD",newPost:{title:title,body:description}})
     }

    return (
        <FormComponent onSubmit={handleSubmit}>
            <InputComponent 
                type="text"
                name="title"
                placeholder="Enter Post Title " 
                value={title}
                onChange={(e)=>dispatch({type:"field", field:"title", value:e.target.value})} 
                onBlur={(e)=>handleBlur(e)} 
            />
            {titleError!=='' && <ErrorMessage error={titleError}>{titleError}</ErrorMessage>}

            <TextAreaComponent
            name="description"
            placeholder="Enter Post Description"
            onChange={(e)=>dispatch({type:"field", field:"description", value:e.target.value})}
            onBlur={(e)=>handleBlur(e)}  
            >
                {description}
            </TextAreaComponent>
            {descriptionError!=='' && <ErrorMessage error={descriptionError}>{descriptionError}</ErrorMessage>}

            <Button
            variant="primary"
            disabled={disabled}
            type="submit"
            >
                Publish
            </Button>
        </FormComponent>
    )
}
