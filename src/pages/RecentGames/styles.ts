import styles from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styles.div`
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 130px;
    margin-right: 130px;
`

export const RecentGamesHeader = styles.div`
    margin-top: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RecentGamesFilter = styles.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Filters = styles.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const TitlePage = styles.h3`
    font-weight: 300;
    font-size: 24px;
    color: var(--text-color);
`

export const TitlePageBold = styles(TitlePage)`
    font-weight: 700;
`

export const CheckBox = styles.div`
    border: 2px solid #000;
    margin-right: 25px;
    padding-left: 28px;
    padding-right: 28px;
    padding-top: 7px;
    padding-bottom: 7px; 
    border-radius: 20px;
    font-size: 14px;
    font-weight: 900;
    background-color: #fff;
    -webkit-user-select: none;  
    -moz-user-select: none;     
    -ms-user-select: none;      
    user-select: none;
`
export const LabelFilter = styles.label`
    font-size: 17px;
    color: var(--text-color);
    margin-right: 15px;
    font-weight: 300;
    margin-left: 40px;
`

export const NewBetLink = styles(Link)`
    font-size: 24px;
    font-weight:  900;
    color: var(--main-color);
    text-decoration: none;
`