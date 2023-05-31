import React from 'react'
import "./Filter.scss";

function Filter({ onChangeSortAscending, onChangeSortDescending, onChangeSortName }) {

    const list = [
        {name: "От дешевых к дорогим", sortProperty: 'minPrice'},
        {name: "От дорогих к дешевым", sortProperty: 'maxPrice'},
        {name: "По алфавиту", sortProperty: 'name'}
    ];

    const SortAscending = (i) => {
        onChangeSortAscending(i)
    }

    const SortDescending = (i) => {
        onChangeSortDescending(i)
    }

    const SortName = (i) => {
        onChangeSortName(i)
    }



    return (
        <div className="button-sort">
            <label className="filter-box__title">Сортувати по: </label>
            <div className="filter">
                <button type="button" onClick={() => SortAscending()}>От дешевых к дорогим</button>
                <button type="button" onClick={() => SortDescending()}>От дорогим к дешевых </button>
                <button type="button" onClick={() => SortName()}>По имени </button>
            </div>
        </div>
  )
}

export default Filter