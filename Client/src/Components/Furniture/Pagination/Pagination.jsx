import React from 'react'
import { setPage } from '../../../Redux/products.reducer';
import { useDispatch,useSelector} from "react-redux";

const Pagination = ({totalProducts}) => {
    const dispatch = useDispatch()
    const pageNumbers = [];
    const { page, pageSize } = useSelector((state) => {
        return state.allProducts;
      });
    for(let i = 1; i <= Math.ceil(totalProducts/pageSize); i++){
        pageNumbers.push(i)
    }

    return (
        <div className='pagination'>   
            <button type='button' onClick={()=>{
                if (page>1){
                    dispatch(setPage(page-1)) 
                }
               
            }

            }>prev</button>
            <div className='page'>
                {   
                    pageNumbers.map(number => (
                        <button key={number} className='page-item' onClick={() => {dispatch(setPage(number))
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
               if (page <(totalProducts / pageSize))
                    dispatch(setPage(page+1)) 
            
            }}>next</button>
        </div>
    )
}

export default Pagination