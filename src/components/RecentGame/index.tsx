import React from 'react';

import { Item, Bar, Numbers, GameNamePrice, GameNamePriceTextOffBold, GameNamePriceText } from './styles'

const RecentGame: React.FC<{ numbers: number[], date: string, price: number, game: string, color: string}> = (props) => {
    return (
        <Item>
            <Bar style={{ backgroundColor: props.color }}/>
            <div>
                <Numbers>{props.numbers.join(', ')}</Numbers>
                <GameNamePrice>
                    <GameNamePriceTextOffBold>{props.date}</GameNamePriceTextOffBold>
                    <GameNamePriceTextOffBold> - </GameNamePriceTextOffBold>
                    <GameNamePriceTextOffBold>({props.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})})</GameNamePriceTextOffBold>
                </GameNamePrice>
                <GameNamePriceText style={{ color: props.color}}>{props.game}</GameNamePriceText>
            </div>
        </Item>
    );
}

export default RecentGame;