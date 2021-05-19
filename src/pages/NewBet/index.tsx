import React from 'react'
import Header from '../../components/Header'

import { Container, Content, Game, TitlePage, TitlePageBold, TitleGame, Filters, DescriptionGame, Numbers, Submit, GamesButton, SubmitButton, Cart, GameCart, Items, Item, Image, Bar, ItemContent, GameNamePrice, GameNamePriceText, GameNamePriceTextBold, ButtonSave } from './styles'
import CheckFilter from '../../components/CheckFilter'

const NewBet : React.FC = () => {
    return (
        <Container>
            <Header />
            <Content>
                <Game>
                    <TitlePage><TitlePageBold>NEW BET</TitlePageBold> FOR MEGA-SENA </TitlePage>
                    <TitleGame>Choose a game</TitleGame>
                    <Filters>
                    </Filters>
                    <div>
                        <TitleGame>Fill your bet</TitleGame>
                        <DescriptionGame>Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or
                            none of the 20 numbers drawn.</DescriptionGame>
                    </div>
                    <Numbers>
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
    )  
}

export default NewBet