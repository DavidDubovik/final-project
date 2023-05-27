import React from 'react';
import './Pagination.scss'

    const Pagination = ({ productsPerPage, totalProducts, paginate, prevPage, nextPage }) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
        pageNumbers.push(i)
    }

    const next = ">>";
    const prev = "<<";

    return (
        <div className='pagination'>   
            <button type='button' className='pagination-button pagination-button__prev' onClick={prevPage}>{prev}</button>
            <div className='pagination__numbers'>
                {   
                    pageNumbers.map(number => (
                        <button key={number} className='pagination__number' onClick={() => paginate(number)}>
                            <span 
                                className='pagination__number-item'
                            >
                                {number}
                            </span>
                        </button>
                    ))
                }
            </div>
            <button type='button' className='pagination-button pagination-button__next' onClick={nextPage}>{next}</button>
        </div>
    )
}

export default Pagination