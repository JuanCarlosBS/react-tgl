import styles from 'styled-components'

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