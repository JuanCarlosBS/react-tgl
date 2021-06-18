import React, { Fragment, useState, useEffect } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useParams } from 'react-router-dom'

import { Container, Content, RecentGamesHeader, RecentGamesFilter, TitlePage, TitlePageBold, Filters, NewBetLink, Items } from './styles'
import RecentGame from '../../components/RecentGame'
import CheckFilter from '../../components/CheckFilter'
import * as saveGamesActions from '../../store/ducks/saveGames/actions';
import { ApplicationState } from '../../store';
import { saveGame, saveGamesTypes } from '../../store/ducks/saveGames/types';
import api from '../../services/api'

interface StateProps {
    saveGames: saveGame[]
}

interface DispatchProps {
    loadRequest(): void
}

interface ParamTypes {
    userId: string
}

type Props = StateProps & DispatchProps

interface GameType {
    color: string
    description: string
    'max-number': number
    'min-cart-value': number
    'price': number
    'range': number
    type: string
}

interface GamesProps {
    id: number;
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
    min_cart_value: number;
}

interface GamesProps {
    id: number;
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
    min_cart_value: number;
}

interface saveGameTypes {
    id: number;
    numbers: string;
    price: number;
    game_id: number;
    user_id: number;
    created_at: number;
    game: GamesProps;
}

function RecentGames(props: Props) {
    const params = useParams<ParamTypes>()
    const [game, setGame] = useState<number>(-1)
    const { loadRequest } = props
    const [saveGames, setSaveGames] = useState<saveGameTypes[]>([])
    const [DUMMY_GAMES, setDUMMY_GAMES] = useState<GamesProps[]>([])
    const userId = localStorage.getItem('userId')

    loadRequest()

    useEffect(() => {
        async function getGames() {
            const res = await api.get('games')
            setDUMMY_GAMES(res.data)
        }

        async function getBets() {
            const res = await api.get('bets', { 
                headers: {
                    Authorization: `Bearer ${userId}`,
            }}) 
            await setSaveGames(res.data.filteredBets)
            localStorage.setItem('userIndex', res.data.user_id)
        }

        getGames()
        getBets()
    })

    function handleGame(gameValue: number) {
        selectGame(gameValue)
    }
    function selectGame(props: number){
        setGame(props)
    }


    return (
        <Fragment>
            <Header idUser={params.userId}/>
        <Container>
            <Content>
                    <RecentGamesHeader>
                        <RecentGamesFilter>
                            <TitlePageBold>RECENT GAMES</TitlePageBold>
                            <TitlePage>Filters</TitlePage>
                            <Filters>
                                {DUMMY_GAMES.map((product: GamesProps, index: number) =>{ 
                                    if (index === game) {
                                        return <CheckFilter selectFilter={handleGame} value={index} firstColor={product.color} secondColor={'#fff'}>{product.type}</CheckFilter>
                                    } else {
                                        return <CheckFilter selectFilter={handleGame} value={index} firstColor={'#fff'} secondColor={product.color}>{product.type}</CheckFilter>
                                    }
                                }
                                )}
                            </Filters>
                        </RecentGamesFilter>
                        <NewBetLink to={'/new-bet/' + params.userId}> New Bet ❯</NewBetLink>
                    </RecentGamesHeader>
                <Items>
                    {saveGames.length > 0 ? saveGames.map((savedGame) => {
                        
                        if (game === -1) 
                            return (<RecentGame numbers={savedGame.numbers} date={'31/05/2002'} price={savedGame.price} game={savedGame.game.type} color={savedGame.game.color}></RecentGame>)
                        else if (DUMMY_GAMES[game].type === savedGame.game.type )
                            return (<RecentGame numbers={savedGame.numbers} date={'31/05/2002'} price={savedGame.price} game={savedGame.game.type} color={savedGame.game.color}></RecentGame>)
                        else
                            return 
                    }): <h6> Nenhum jogo recente </h6>
                    }
                </Items>
            </Content>
        </Container>
        </Fragment>

    )
}

const mapStateToProps = (state: ApplicationState) => ({
    saveGames: state.saveGames.data,
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(saveGamesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecentGames)