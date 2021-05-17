import styles, { css } from 'styled-components'


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

export const Logo = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ForLogo = styles.div`
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 2px;
    border-radius: 40px;
    padding: 0.50%;
    padding-left: 12%;
    padding-right: 12%;
`

export const LogoFirstText = styles.h2`
    color: var(--text-color);
    font-size: 65px;
`

export const LogoForText = styles.h3`
    color: #fff;
    font-size: 22px;
`

export const LogoSecondText = styles.h1`
    color: var(--text-color);
    font-size: 83px;
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
    height : 337px;
    width: 352px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 14px;
    margin-top: 25px;
    border: 1px solid #dddddd;
`

export const InputEmail = styles.input`
    padding: 30px;
    padding-top: 34px;
    border-radius: 14px 14px 0px 0px;
    width: 292px;
    height: 21px;
    outline: none;
    border: none;
    border-bottom: 2px solid #f7f7f7

`

export const LastInput = styles(InputEmail)`
    border-radius: 0px 0px 0px 0px;
`
export const Link = styles.a`    
    color: #9e9e9e;
    text-decoration: none;
    font-size: 17px;
    font-weight: 300;
`

export const SectionForgotPassword = styles.div`
    margin-top: 30px;
    margin-bottom: 35px;
    display: flex;
    justify-content:flex-end; 
`

export const SubmitButton = styles.button`
    font-weight: 800;
    color: #B5C401;
    text-decoration: none;
    font-size: 35px;
    background-color: #fff;
    border: none;
`

export const LinkSingUpButton = styles.a`
    margin-top: 30px; 
    font-weight: 800;
    color: #707070;
    text-decoration: none;
    font-size: 35px;
    border: none;
`