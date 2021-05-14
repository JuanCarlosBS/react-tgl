import styles from 'styled-components'

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