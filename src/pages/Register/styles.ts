import styles, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styles.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`


export const TitleText = styles.label`
    color: var(--text-color);
    font-size: 35px;
`

export const FormAuthentication = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Form = styles.form`
    height : 385px;
    width: 352px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 14px;
    margin-top: 25px;
    border: 1px solid #dddddd;
`

export const Input = styles.input`
    padding: 30px;
    padding-top: 34px;
    border-radius: 14px 14px 0px 0px;
    width: 292px;
    height: 21px;
    outline: none;
    border: none;
    border-bottom: 2px solid #f7f7f7

`

export const LastInput = styles(Input)`
    border-radius: 0px 0px 0px 0px;
`

export const SubmitButton = styles.button`
    margin-top: 39px;
    font-weight: 800;
    color: #B5C401;
    text-decoration: none;
    font-size: 35px;
    background-color: transparent;
    border: none;
`

export const LinkSingUpButton = styles(Link)`
    margin-top: 30px; 
    font-weight: 800;
    color: #707070;
    text-decoration: none;
    font-size: 35px;
    border: none;
`