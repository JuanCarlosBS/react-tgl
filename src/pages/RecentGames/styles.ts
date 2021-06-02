import styles from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styles.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styles.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 1080px;
    max-width: 1080px;
    flex-direction: column;
    align-items: center;
`

export const RecentGamesHeader = styles.div`
    margin-top: 65px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 800px) {
        flex-direction: column;   
    }
`

export const RecentGamesFilter = styles.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 800px) {
        flex-direction: column;   

    }
`

export const Filters = styles.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    flex-direction: row;
`

export const TitlePage = styles.h3`
    font-weight: 300;
    font-size: 17px;
    margin-right: 45px;
    color: var(--text-color);
    white-space: nowrap;
    @media (max-width: 800px) {
        margin-right: 0px;   
        margin-bottom: 15px;
    }
`

export const TitlePageBold = styles(TitlePage)`
    font-weight: 700;
    font-size: 24px;
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
    white-space: nowrap;
    @media (max-width: 800px) {
        margin-top: 15px;
    }
`

export const Items = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 100%;
    margin-top: 37px;
    max-height: 600px;
    overflow-y: auto;
`