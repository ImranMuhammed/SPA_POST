
import styled, { css } from 'styled-components'

 export const InputComponent=styled.input`
    padding:10px;
    border-radius:10px;
    font-size:20px;
    outline-width:0;
    ${props=>props.width? css`
        width:${props.width}
        `
        :
        css`
        width:100%;
        `
         }

    ${props=>props.marginLeft?  css`
        margin-left:${props.marginLeft}
        `
        :
        css`
        margin-left:1rem;
        `
        }
    ${props=>props.marginRight?  css`
    margin-right:${props.marginRight}
    `
    :
    css`
    margin-right:1rem;
    `
    }
    ${props=>props.marginTop?  css`
    margin-top:${props.marginTop}
    `
    :
    css`
    margin-top:1rem;
    `
    }
    ${props=>props.marginBottom?  css`
    margin-bottom:${props.marginBottom}
    `
    :
    css`
    margin-bottom:1rem;
    `
    }

    ${props=>props.borderRadius &&  css`
    border-radius:${props.borderRadius}
    `
    }

` 
