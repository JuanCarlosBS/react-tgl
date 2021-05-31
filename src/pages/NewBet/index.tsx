import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../components/Header'
import { connect, useDispatch } from 'react-redux'

import { Container, Content, Game, TitlePage, TitlePageBold, TitleGame, Filters, DescriptionGame, Numbers, Submit, GamesButton, SubmitButton, Cart, GameCart, Items, ButtonSave } from './styles'
import CheckFilter from '../../components/CheckFilter'
import NumberButton from '../../components/NumberButton'
import ItemCart from '../../components/ItemCart'
import { ApplicationState } from '../../store/index'

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

interface StateProps{

}

interface DispatchProps {

}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps

interface ICart {
    id: string;
    type: string;
    price: number;
    color: string;
    numbers: number[];
    enabled: boolean;
}

const NewBet = () => {
    const [game, setGame] = useState<number>(-1)
    const [arrayGamesRange, setArrayGamesRange] = useState<number[]>([])
    const [numbers, setNumbers] = useState<number[]>([])
    const [cart, setCart] = useState<ICart[]>([])
    const [total, setTotal] = useState<number>(0)
    const dispatch = useDispatch()
    
    function handleGame(gameValue: number) {
        selectGame(gameValue)
        selectNumbers(gameValue)
        clearGame()
    }
    function selectGame(props: number){
        setGame(props)
    }

    function selectNumbers(props: number) {
        setArrayGamesRange([])
        setArrayGamesRange(Array.from({length: Number(DUMMY_GAMES[props].range)}, (_,i) => i+1))
    }
    function activeNumberHandle(props: number) {
        if (numbers.indexOf(props) === -1) {
            if (numbers.length >= DUMMY_GAMES[game]['max-number']){
                return
            }
        setNumbers((prevNumbers) => {
            return [
                ...prevNumbers, 
                props
            ]
        })} else {
            setNumbers(numbers.filter(item => item !== props))
        }
    }

    function completeGame() {
        while (numbers.length < DUMMY_GAMES[game]['max-number']) {
            const numbersGame = Math.floor(Math.random() * DUMMY_GAMES[game].range) + 1
            console.log(numbersGame)
            console.log(numbers.length)
            activeNumberHandle(numbersGame)
        }
    }

    function clearGame() {
        setNumbers([])
    }

    function addCartHandle() {
        if (numbers.length === DUMMY_GAMES[game]['max-number']) {
            setCart((prevCart) => {
                setTotal(total + DUMMY_GAMES[game].price)
                return [
                    ...prevCart, 
                    { id: Math.random().toString(), type: DUMMY_GAMES[game].type, price: DUMMY_GAMES[game].price, color: DUMMY_GAMES[game].color, numbers: numbers, enabled: true}
                ]
            })
            clearGame()
        }
    }

    function saveCart(products: ICart[]) {
        if(total >= 30) {
            
            setNumbers([])
            clearGame()
            setCart([])
        }
    }

    function removeItemCart(id: string) {
        setCart(cart.filter(item => item.id != id))
        const cartFilter = cart.filter(item => item.id = id)
        setTotal(total - cartFilter[0].price)
    }

    return(
        <Fragment>
            <Header />
            <Container>
                <Content>
                    <Game>
                        <TitlePage>
                            <TitlePageBold>NEW BET </TitlePageBold>
                            FOR {game === -1 ? <div></div> :DUMMY_GAMES[game].type.toUpperCase()}
                        </TitlePage>
                        <TitleGame>Choose a game</TitleGame>
                        <Filters>
                            {DUMMY_GAMES.map((product, index) =>{ 
                                if (index === game) {
                                    return <CheckFilter selectFilter={handleGame} value={index} firstColor={product.color} secondColor={'#fff'}>{product.type}</CheckFilter>
                                } else {
                                    return <CheckFilter selectFilter={handleGame} value={index} firstColor={'#fff'} secondColor={product.color}>{product.type}</CheckFilter>
                                }
                            }
                            )}
                        </Filters>
                        <div>
                            <TitleGame>Fill your bet</TitleGame>
                            <DescriptionGame>{game == -1 ? <div></div> : DUMMY_GAMES[game].description}</DescriptionGame>
                        </div>
                        <Numbers>
                            {game === 4 ? <div></div> : arrayGamesRange.map((item) =>{
                                    const numberItem = numbers.find(element => element === item)
                                    if (numberItem === item){
                                        return (<NumberButton activeNumber={activeNumberHandle} value={item} color={'#01AC66'}>{item>9? item: `0${item}`} </NumberButton>)
                                    } else {
                                        return(<NumberButton activeNumber={activeNumberHandle} value={item} color={'#ADC0C4'}>{item>9? item: `0${item}`} </NumberButton>)
                                    }
                            })}
                        </Numbers>
                        <Submit>
                            <div >
                                <GamesButton onClick={completeGame}>Complete game</GamesButton>
                                <GamesButton onClick={clearGame}>Clear game</GamesButton>
                            </div>
                            <div>
                                <SubmitButton onClick={addCartHandle}>Add to Cart</SubmitButton>
                            </div>
                        </Submit>
                    </Game>
                    <Cart>
                        <GameCart>
                            <TitlePage>CART</TitlePage>
                            <Items>
                                {cart.map(item => {
                                    return <ItemCart id={item.id} color={item.color} cartNumbers={item.numbers} cartGame={item.type} cartPrice={item.price} remove={removeItemCart}></ItemCart>
                                })}
                            </Items>
                            <div>
                            <TitlePage><b>CART</b> TOTAL: {total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</TitlePage>
                            </div>
                        </GameCart>
                        <ButtonSave onClick={() => {saveCart(cart)}}>Save ❯</ButtonSave>
                    </Cart>
                </Content>
            </Container>
        </Fragment>
    )
}


export default connect()(NewBet)