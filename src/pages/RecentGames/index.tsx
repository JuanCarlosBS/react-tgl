import React from 'react'
import Header from '../../components/Header'

import { Container, RecentGamesHeader, RecentGamesFilter, TitlePageBold, Filters, LabelFilter, CheckBox, NewBetLink } from './styles'

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
        </Container>
    )
}

export default RecentGames