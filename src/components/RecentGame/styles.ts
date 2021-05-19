import styles from 'styled-components'

export const Item = styles.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`

export const Bar = styles.div`
    min-width: 6px;
    height: 94px;
    border-radius: 10px 10px 10px 10px;
    margin-right: 12px;
    background-color: blue;
`

export const Numbers = styles.p`
    font-size: 17px;
    color: var(--text-color);
    margin-bottom: 15px; 
`

export const GameNamePrice = styles.div`
    display:flex;
    align-items: center;
    font-size: 17px;
    margin-bottom: 15px;
`

export const GameNamePriceText = styles.h5`
    margin-right: 15px;
    font-size: 20px;
    color: blue;
`

export const GameNamePriceTextOffBold = styles.h6`
    font-weight: 300;
`