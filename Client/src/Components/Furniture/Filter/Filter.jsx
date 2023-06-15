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
<<<<<<< HEAD
                <button type="button" onClick={() => SortAscending()}>От дешевых к дорогим</button>
                <button type="button" onClick={() => SortDescending()}>От дорогим к дешевых </button>
                <button type="button" onClick={() => SortName()}>По имени </button>
=======
                <button className="button-of-filter" type="button" onClick={() => SortAscending()}>🠗 Ціна</button>
                <button className="button-of-filter" type="button" onClick={() => SortDescending()}>🠕 Ціна</button>
                <button className="button-of-filter" type="button" onClick={() => SortName()}>🠗 А-я </button>
>>>>>>> 86d0924afd98915f589a29dcd7b3e6cdc65cacfb
            </div>
        </div>
  )
}

export default Filter