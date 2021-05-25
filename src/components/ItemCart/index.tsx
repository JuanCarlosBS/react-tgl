import React from 'react';

import { Item, Image, Bar, ItemContent, GameNamePrice, GameNamePriceText, GameNamePriceTextBold } from './styles'

const ItemCart : React.FC<{ id: string; color: string; cartNumbers: number[]; cartGame: string; cartPrice: number;}> = (props) => {
    return (
        <Item>
            <Image/>
            <Bar style={{ backgroundColor: props.color }}></Bar>
            <React.Fragment>
                <ItemContent>{props.cartNumbers}</ItemContent>
                <GameNamePrice>
                    <GameNamePriceText style={{ fontSize: props.color }}>{props.cartGame}</GameNamePriceText>
                    <GameNamePriceTextBold>{props.cartPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</GameNamePriceTextBold>
                </GameNamePrice>
            </React.Fragment>
        </Item>
    )
}

export default ItemCart