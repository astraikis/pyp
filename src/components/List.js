import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import { banned } from '../banned';

function List({ setShowList, setShowScanner }) {
    const productObject = useSelector(state => state.product);
    const { loading, product } = productObject;

    var ingredients = []


    if (product['hints'][0]) {
        ingredients = product['hints'][0]['food']['foodContentsLabel'].split(';')
        for (var i = 0; i < ingredients.length; i++) {
            ingredients[i] = ingredients[i].trim()
        };
    }

    return (
        <div className='list-container'>
            <div className='reset-container'>
                <a href='/'><span className='reset'>scan another product<i class="far fa-undo"></i></span></a>
            </div>
            <div className='ingredient-section'>
                { ingredients.map((ingredient) => (
                    ((ingredient.toLowerCase() in banned) ? <a href={ banned[ingredient.toLowerCase()] } target="_blank" rel='noreferrer' className='banned-ingredient ingredient'>{ ingredient.toLowerCase() } <i class="far fa-external-link link"></i></a> : <span className='ingredient'>{ ingredient.toLowerCase() }</span>)
                )) }
            </div>
        </div>
    )
};

export default List;