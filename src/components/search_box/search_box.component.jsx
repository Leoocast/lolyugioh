import React from 'react'
import './search_box.styles.sass'

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="dflexCenter">
        <input  className="search" 
                type="search" 
                placeholder={ placeholder } 
                onChange={e => handleChange(e.target.value)}/>
    </div>
)