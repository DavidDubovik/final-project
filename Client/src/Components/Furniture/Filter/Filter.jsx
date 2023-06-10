import React from 'react'
import "./Filter.scss";

function Filter({ onChangeSortAscending, onChangeSortDescending, onChangeSortName }) {


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
                <button className="button-of-filter" type="button" onClick={() => SortAscending()}>🠗 Ціна</button>
                <button className="button-of-filter" type="button" onClick={() => SortDescending()}>🠕 Ціна</button>
                <button className="button-of-filter" type="button" onClick={() => SortName()}>🠗 А-я </button>
            </div>
        </div>
  )
}

export default Filter