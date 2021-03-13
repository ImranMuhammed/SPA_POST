import styled, {css} from 'styled-components'

export  const ErrorMessage=styled.label`
    margin:0 1rem ;
    font-size:20px;
    font-weight:bold;
    color:red;

    ${props=> props.error && css`
        margin:0 2rem;
        content:${props.error}
    ` }
`