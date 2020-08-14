import React from 'react'
import './card.styles.css'

export const Card = ({ champ }) => (
    <div className="card">
        <div className="name">
            {champ.name} - {toUpperTitle(champ.title)}
        </div>
        <div className="level">
            {
                [...Array(champ.info.difficulty).keys()]
                    .filter(r => r !== 0)
                    .map(r => `⭐`)
            }
        </div>
        <div className="image">
            <img alt="champ" 
                src={`http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${champ.image.full}`}/>
        </div>
        <div className="description">
            <h2>
                {champ.tags[0]}/{champ.tags[1]}
            </h2>
            <p>
                {champ.blurb}
            </p>
            
            <div className="stats">
                AD/{champ.info.attack} &nbsp; AP/{champ.info.magic} &nbsp; DEF/{champ.info.defense}  
            </div>
        </div>
    </div>
)

function toUpperTitle(title){

    const newT = title.split('')

    newT[0] = newT[0].toUpperCase()

    return newT.join('')
}