import React from 'react';

import { Item, Image, Bar, ItemContent, GameNamePrice, GameNamePriceText, GameNamePriceTextBold } from './styles'

const ItemCart : React.FC = () => {
    return (
        <Item>
            <Image/>
            <Bar></Bar>
            <React.Fragment>
                <ItemContent></ItemContent>
                <GameNamePrice>
                    <GameNamePriceText ></GameNamePriceText>
                    <GameNamePriceTextBold></GameNamePriceTextBold>
                </GameNamePrice>
            </React.Fragment>
        </Item>
    )
}

export default ItemCart