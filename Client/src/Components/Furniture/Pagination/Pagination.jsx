import React from 'react'
import { setPage } from '../../../Redux/products.reducer';
import { useDispatch,useSelector} from "react-redux";

const Pagination = ({totalProducts}) => {
    const dispatch = useDispatch()
    const pageNumbers = [];
    const { startPage, perPage } = useSelector((state) => {
        return state.allProducts;
      });

    for(let i = 1; i <= Math.ceil(totalProducts/perPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className='pagination'>   
            <button type='button' onClick={()=>{
                if (startPage>1){
                    dispatch(setPage(startPage-1)) 
                   
                }
               
            }

            }>⬅</button>
            <div className='page'>
                {   
                    pageNumbers.map(number => (
                        <button key={number} className='page-item' onClick={() => {
                            console.log(number)
                            dispatch(setPage(number))
                            
                            }}>
                            <span 
                                className='page-link'
                            >
                                {number}
                            </span>
                        </button>
                    ))
                }
            </div>
            <button type='button' onClick={()=>{
              
               if (startPage <(totalProducts / perPage))
                   { dispatch(setPage(startPage+1)) 
                    }
            
            }}>➡</button>
        </div>
    )
}

export default Pagination