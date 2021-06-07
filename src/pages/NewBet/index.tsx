import React, { Fragment, useState } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { useParams } from 'react-router-dom'

import { Container, Content, Game, TitlePage, TitlePageBold, TitleGame, Filters, DescriptionGame, Numbers, Submit, GamesButton, SubmitButton, Cart, GameCart, Items, ButtonSave } from './styles'
import CheckFilter from '../../components/CheckFilter'
import NumberButton from '../../components/NumberButton'
import ItemCart from '../../components/ItemCart'
import * as saveGamesActions from '../../store/ducks/saveGames/actions';
import { ApplicationState } from '../../store';
import { saveGame } from '../../store/ducks/saveGames/types';

const DUMMY_GAME = require('../../json/games.json')

const DUMMY_GAMES = DUMMY_GAME.types

interface GameType {
    color: string
    description: string
    'max-number': number
    'min-cart-value': number
    'price': number
    'range': number
    type: string
}
interface StateProps {
    saveGames: saveGame[]
}

interface DispatchProps {
    loadRequest(): void
}

type Props = StateProps & DispatchProps

interface ICart {
    id: string;
    type: string;
    price: number;
    color: string;
    numbers: number[];
    iduser: string;
}

interface ParamTypes {
    userId: string
}

const NewBet = (props: Props) => {
    const [game, setGame] = useState<number>(-1)
    const [arrayGamesRange, setArrayGamesRange] = useState<number[]>([])
    const [numbers, setNumbers] = useState<number[]>([])
    const [cart, setCart] = useState<ICart[]>([])
    const [total, setTotal] = useState<number>(0)
    const params = useParams<ParamTypes>()
    const { loadRequest } = props
    const { saveGames } = props

    loadRequest()
    
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
        console.log({props})
        if (numbers.indexOf(props) === -1) {
            if (numbers.length >= DUMMY_GAMES[game]['max-number']){
                return
            }
        setNumbers([...numbers, props])
        //setNumbers((prevNumbers) => {
          //  return [
            //    ...prevNumbers, 
            //    props
            //]
        /*})*/
        } else {
            setNumbers(numbers.filter(item => item !== props))
        }
    }
    function completeGame() {

        while (numbers.length < DUMMY_GAMES[game]['max-number']) {
            const numbersGame = Math.floor(Math.random() * DUMMY_GAMES[game].range) + 1
            //console.log(numbersGame)
            //console.log(numbers.length)
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
                    { id: Math.random().toString(), type: DUMMY_GAMES[game].type, price: DUMMY_GAMES[game].price, color: DUMMY_GAMES[game].color, numbers: numbers, iduser: params.userId}
                ]
            })
            return clearGame()
        }
        alert(`Você precisa adicionar no minimo ${DUMMY_GAMES[game]['max-number']} numeros`)
    }

    function saveCart() {
        if(total >= 30) {
            cart.map(item => {
                saveGames.push(item)
            })
            setNumbers([])
            clearGame()
            setCart([])
            alert('Itens foram salvos')
        } else {
            alert('Dever ter no minimo R$30,00')
        }
        
    }

    function removeItemCart(id: string) {
        setCart(cart.filter(item => item.id != id))
        const cartFilter = cart.filter(item => item.id = id)
        setTotal(total - cartFilter[0].price)
    }

    return(
        <Fragment>
            <Header idUser={params.userId}/>
            <Container>
                <Content>
                    <Game>
                        <TitlePage>
                            <TitlePageBold>NEW BET </TitlePageBold>
                            FOR {game === -1 ? <div></div> :DUMMY_GAMES[game].type.toUpperCase()}
                        </TitlePage>
                        <TitleGame>Choose a game</TitleGame>
                        <Filters>
                            {DUMMY_GAMES.map((product: GameType, index: number) =>{ 
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
                                { cart.length > 0 ?cart.map(item => {
                                    return <ItemCart id={item.id} color={item.color} cartNumbers={item.numbers} cartGame={item.type} cartPrice={item.price} remove={removeItemCart}></ItemCart>
                                }): <h6>Nenhum item no Carrinho</h6>}
                            </Items>
                            <div>
                            <TitlePage><b style={{marginRight: 5}}>CART</b> TOTAL: {total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</TitlePage>
                            </div>
                        </GameCart>
                        <ButtonSave onClick={saveCart}>Save ❯</ButtonSave>
                    </Cart>
                </Content>
            </Container>
        </Fragment>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    saveGames: state.saveGames.data,
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(saveGamesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewBet)