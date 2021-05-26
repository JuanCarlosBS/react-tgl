import React from 'react';

import { Item, Image, Bar, ItemContent, GameNamePrice, GameNamePriceText, GameNamePriceTextBold, Content, ButtonDelete } from './styles'
import DeleteIcon from '../../assets/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png'

const ItemCart : React.FC<{ id: string; color: string; cartNumbers: number[]; cartGame: string; cartPrice: number;  remove: (number: string) => void}> = (props) => {
    return (
        <Item>
            <ButtonDelete onClick={() => {props.remove(props.id)}}><Image src={DeleteIcon}/> </ButtonDelete>
            <Bar style={{ backgroundColor: props.color }}></Bar>
            <Content>
                <ItemContent>{props.cartNumbers.join(',')}</ItemContent>
                <GameNamePrice>
                    <GameNamePriceText style={{ color: props.color }}>{props.cartGame}</GameNamePriceText>
                    <GameNamePriceTextBold>{props.cartPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</GameNamePriceTextBold>
                </GameNamePrice>
            </Content>
        </Item>
    )
}

export default ItemCart