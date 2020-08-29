import React from 'react'
import { Card } from '../card/card.component'
import './card_list.styles.sass'

export const CardList = ({ champs }) => {

    const displayNames = () => champs.map(r => <Card key={r.id} champ={r}/>)

    return <div className="card-list">{ displayNames() }</div>
} 