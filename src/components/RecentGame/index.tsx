import React from 'react';

import { Item, Bar, Numbers, GameNamePrice, GameNamePriceTextOffBold, GameNamePriceText } from './styles'

const RecentGame: React.FC = () => {
    return (
        <Item>
            <Bar/>
            <div>
                <Numbers>01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25</Numbers>
                <GameNamePrice>
                    <GameNamePriceTextOffBold>30/11/2021</GameNamePriceTextOffBold>
                    <GameNamePriceTextOffBold> - </GameNamePriceTextOffBold>
                    <GameNamePriceTextOffBold>(R$ 2,50)</GameNamePriceTextOffBold>
                </GameNamePrice>
                <GameNamePriceText>Lotofácil</GameNamePriceText>
            </div>
        </Item>
    );
}

export default RecentGame;