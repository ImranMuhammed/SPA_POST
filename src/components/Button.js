
import styled ,{css} from 'styled-components'

export const Button=styled.button`
    padding:10px 20px;
    margin:1rem;
    text-align:center;
    font-size:20px;
    border-radius:10px;
    outline-width:none;
    width:fit-content;
    cursor: pointer;
    &:hover{
        transform:scale(1.1);
        transition:all 0.5s;
    }
    
    ${props => props.variant==='primary' ? css`
        background-color:blue;
        color:white;
    ` 
    :
    props.variant==='secondary' ? css`
        background-color:rgba(255,0,0,0.9);
        color:white;
    `
    :
    css`
        background-color:rgba(100,100,100,0.4);
        color:black;
    `
    }

    ${props => props.disabled && css`
        cursor:default;
        opacity:0.5;
        color:gray;
        transform:scale(1)
    `
    }

    ${props => props.size==="small"? css`
        transform:scale(0.8)
    `
    :
    props.size==="large"? css`
        transform:scale(1.2)
    `
    :  
     css`
        transform:scale(1.0)
    ` 
    }

    ${props=>props.children && css`
        content:${props.children}
    `}
`
