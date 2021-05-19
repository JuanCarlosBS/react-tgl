import React from 'react'
import Header from '../../components/Header'

import { Container, RecentGamesHeader, RecentGamesFilter, TitlePageBold, Filters, LabelFilter,  NewBetLink, Items } from './styles'
import RecentGame from '../../components/RecentGame'

const RecentGames = () => {
    return (
        <Container>
            <Header />
            <div className="content">
                <RecentGamesHeader>
                    <RecentGamesFilter>
                    <TitlePageBold>RECENT GAMES</TitlePageBold>
                        <Filters>
                            <LabelFilter>Filters</LabelFilter>
                        </Filters>
                    </RecentGamesFilter>
                    <NewBetLink to='/new-bet'> New Bet ❯</NewBetLink>
                </RecentGamesHeader>
            </div>
            <Items>
                <RecentGame />
                <RecentGame />
                <RecentGame />
                <RecentGame />
                <RecentGame />
                <RecentGame />
            </Items>
        </Container>
    )
}

export default RecentGames