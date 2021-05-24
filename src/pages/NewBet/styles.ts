import styles from 'styled-components'

export const Container = styles.div`
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 130px;
    margin-right: 130px;
`

export const Content = styles.div`
    display: flex;
    justify-content: space-between;
    margin-top: 41px;
`

export const Game = styles.div`
    margin-top:32px;
    margin-right: 41px;
`

export const TitlePage = styles.h3`
    display: flex;
    margin-right: 6px;
    font-weight: 300;
    font-size: 24px;
    color: var(--text-color);
`

export const TitlePageBold = styles(TitlePage)`
    font-weight: 700;
`

export const TitleGame = styles.h4`
    font-weight: 700;
    font-size: 17px;
    color: var(--text-color);
    margin-top: 34px;
`

export const DescriptionGame = styles.p`
    font-weight: 300;
    font-size: 17px;
    color: var(--text-color);
`

export const Filters = styles.div`
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-top: 20px;
` 


export const Numbers = styles.div`
    margin-top: 25px;
    max-width: 735px;
    max-height: 375px;
    overflow-y:auto;        
`

export const NumbersButton = styles.button`
    padding: 20px;
    margin-top: 18px;
    margin-bottom: 10px;
    border-radius: 50px;
    border: 1px solid #ADC0C4;
    background-color: #ADC0C4;
    color: #ffffff;
    margin-left: 12px;
    font-size:20px;
    font-weight: 700;
    cursor: pointer;
`

export const Submit = styles.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 44px;
`

export const GamesButton = styles.button`
    border-radius: 10px;
    border: 1px solid #27C383;
    font-size: 16px;
    font-weight: 400;
    color: #27C383;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-left: 24px;
    padding-right:24px;
    cursor: pointer;
    margin-right: 25px;
`

export const SubmitButton = styles.button`
    border-radius: 10px;
    border: 1px solid #27C383;
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-left: 24px;
    padding-right:24px;
    background-color: #27C383;
    cursor: pointer;
`

export const Cart = styles.div`
    height: 484px; 
    width: 317px;
    background-color: #FFFFFF;
    border: 0.5px solid #E2E2E2;
    border-radius:10px;
    min-width: 317px;
`

export const GameCart = styles.div`
    padding-left: 19px;
    padding-top: 32px;
    padding-right: 19px;
    padding-bottom: 47px;
    display: flex;
    flex-direction: column;
    justify-content:space-between; 
`

export const Items = styles.div`
    margin-top: 37px;
    margin-bottom: 37px;
    min-height: 207px;
    height: 207px;
    max-height: 207px;
    overflow-y: auto;
`

export const Item = styles.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`

export const Image = styles.img`
    height: 24px;
    margin-right: 14px;
    cursor: pointer;
`

export const Bar = styles.div`
    min-width: 2px;
    height: 60px;
    border-radius: 10px 0px 0px 10px;
    margin-right: 12px;
`

export const ItemContent = styles.p`
    margin-bottom: 6px;
`
export const GameNamePrice = styles.div`
    display:flex;
    align-items: center;
    font-size: 20px;
`

export const GameNamePriceText = styles.h5`
    margin-right: 14px;
`

export const GameNamePriceTextBold = styles.h6`
    font-weight: 300;
`

export const ButtonSave = styles.button`
    margin-top: 0px;
    width : 317px;
    min-height: 96px;
    background-color: #F4F4F4;
    border: 1px solid #E2E2E2;
    border-radius: 0px 0px 10px 10px;
    font-size: 35px;
    font-weight: 700px;
    color: #27C383;
    cursor: pointer;
`