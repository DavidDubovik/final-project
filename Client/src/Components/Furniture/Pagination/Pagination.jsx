import React from 'react'

const Pagination = ({ productsPerPage, totalProducts, paginate, prevPage, nextPage }) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className='pagination'>   
            <button type='button' onClick={prevPage}>prev</button>
            <div className='page'>
                {   
                    pageNumbers.map(number => (
                        <button key={number} className='page-item' onClick={() => paginate(number)}>
                            <span 
                                className='page-link'
                            >
                                {number}
                            </span>
                        </button>
                    ))
                }
            </div>
            <button type='button' onClick={nextPage}>next</button>
        </div>
    )
}

export default Pagination