import React, { Fragment, Component, useEffect } from 'react'
import Header from '../../components/Header'

import { Container, Content, Game, TitlePage, TitlePageBold, TitleGame, Filters, DescriptionGame, Numbers, Submit, GamesButton, SubmitButton, Cart, GameCart, Items, Item, Image, Bar, ItemContent, GameNamePrice, GameNamePriceText, GameNamePriceTextBold, ButtonSave } from './styles'
import CheckFilter from '../../components/CheckFilter'
import NumberButton from '../../components/NumberButton'

const DUMMY_GAMES = [
    {
      "type": "Lotofácil",
      "description": "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
      "range": 25,
      "price": 2.5,
      "max-number": 15,
      "color": "#7F3992",
      "min-cart-value": 30
    },
    {
      "type": "Mega-Sena",
      "description": "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
      "range": 60,
      "price": 4.5,
      "max-number": 6,
      "color": "#01AC66",
      "min-cart-value": 30
    },
    {
      "type": "Quina",
      "description": "Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.",
      "range": 80,
      "price": 2,
      "max-number": 5,
      "color": "#F79C31",
      "min-cart-value": 30
    }
]

const NewBet = () => {

    return(
        <Fragment>
            <Header />
            <Container>
                <Content>
                    <Game>
                        <TitlePage><TitlePageBold>NEW BET</TitlePageBold> FOR MEGA-SENA </TitlePage>
                        <TitleGame>Choose a game</TitleGame>
                        <Filters>
                            {DUMMY_GAMES.map((product) =>(
                                <CheckFilter>{product.type}</CheckFilter>
                            ))}
                        </Filters>
                        <div>
                            <TitleGame>Fill your bet</TitleGame>
                            <DescriptionGame>Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or
                                none of the 20 numbers drawn.</DescriptionGame>
                        </div>
                        <Numbers>
                            <NumberButton>01</NumberButton>
                            <NumberButton>02</NumberButton>
                            <NumberButton>03</NumberButton>
                            <NumberButton>04</NumberButton>
                            <NumberButton>05</NumberButton>
                            <NumberButton>06</NumberButton>
                            <NumberButton>07</NumberButton>
                            <NumberButton>08</NumberButton>
                            <NumberButton>09</NumberButton>
                            <NumberButton>10</NumberButton>
                        </Numbers>
                        <Submit>
                            <div >
                                <GamesButton>Complete game</GamesButton>
                                <GamesButton>Clear game</GamesButton>
                            </div>
                            <div>
                                <SubmitButton>Add to Cart</SubmitButton>
                            </div>
                        </Submit>
                    </Game>
                    <Cart>
                        <GameCart>
                            <TitlePage>CART</TitlePage>
                            <Items>
                            </Items>
                            <div>
                            <TitlePage><b>CART</b> TOTAL:</TitlePage>
                            </div>
                        </GameCart>
                        <ButtonSave>Save ❯</ButtonSave>
                    </Cart>
                </Content>
            </Container>
        </Fragment>
    )
}

export default NewBet