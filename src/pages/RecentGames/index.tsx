import React, { Fragment, useState } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useParams } from 'react-router-dom'

import { Container, Content, RecentGamesHeader, RecentGamesFilter, TitlePage, TitlePageBold, Filters, NewBetLink, Items } from './styles'
import RecentGame from '../../components/RecentGame'
import CheckFilter from '../../components/CheckFilter'
import * as saveGamesActions from '../../store/ducks/saveGames/actions';
import { ApplicationState } from '../../store';
import { saveGame } from '../../store/ducks/saveGames/types';

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

function RecentGames(props: Props) {
    const params = useParams<ParamTypes>()
    const [game, setGame] = useState<number>(-1)
    const { loadRequest } = props
    const { saveGames } = props

    loadRequest()

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
                                {DUMMY_GAMES.map((product: GameType, index: number) =>{ 
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
                    {saveGames.map((savedGame) => {
                        if (game === -1 && params.userId === savedGame.iduser) 
                            return (<RecentGame numbers={savedGame.numbers} date={'30/05/2002'} price={savedGame.price} game={savedGame.type} color={savedGame.color}></RecentGame>)
                        else if (DUMMY_GAMES[game].type === savedGame.type && params.userId === savedGame.iduser)
                            return (<RecentGame numbers={savedGame.numbers} date={'30/05/2002'} price={savedGame.price} game={savedGame.type} color={savedGame.color}></RecentGame>)
                        else
                            return 
                    })}
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