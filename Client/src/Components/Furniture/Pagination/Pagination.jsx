import React from 'react'
import queryString from "query-string";
import { useDispatch,useSelector} from "react-redux";
import {

    setPage,
  } from "../../../Redux/products.reducer";
  import { useSearchParams } from "react-router-dom";

const Pagination = ({totalProducts}) => {
    const [, setSearchParams] = useSearchParams("");

    const dispatch = useDispatch()
    const pageNumbers = [];
    const {
 
        startPage,
        perPage,
  
      } = useSelector((state) => {
        return state.allProducts;
      });
    
      const { categories, brand, sort, minPrice, maxPrice } = useSelector(
        (state) => {
          return state.allProducts.filterBy;
        }
      );

    for(let i = 1; i <= Math.ceil(totalProducts/perPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className='pagination'>   
            <button type='button' onClick={()=>{
                if (startPage>1){
                    dispatch(setPage(startPage-1)) 
                    const queryParams2 = {
                        categories,
                        brand,
                        sort,
                        minPrice,
                        maxPrice,
                        startPage:startPage-1,
                        perPage,
                      };
                      Object.entries(queryParams2).forEach(([k, v]) => {
                        if (v.length === 0) delete queryParams2[k];
                      });
                      const myQuery = queryString.stringify(queryParams2);
                  
                  
                      setSearchParams(myQuery)
                }
               
            }

            }>⬅</button>
            <div className='page'>
                {   
                    pageNumbers.map(number => (
                        <button key={number} className='page-item' onClick={() => {
                            console.log(number)
                            dispatch(setPage(number))
                            const queryParams2 = {
                                categories,
                                brand,
                                sort,
                                minPrice,
                                maxPrice,
                                startPage:number,
                                perPage,
                              };
                              Object.entries(queryParams2).forEach(([k, v]) => {
                                if (v.length === 0) delete queryParams2[k];
                              });
                              const myQuery = queryString.stringify(queryParams2);
                          
                          
                              setSearchParams(myQuery)
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
                    const queryParams2 = {
                        categories,
                        brand,
                        sort,
                        minPrice,
                        maxPrice,
                        startPage:startPage+1,
                        perPage,
                      };
                      Object.entries(queryParams2).forEach(([k, v]) => {
                        if (v.length === 0) delete queryParams2[k];
                      });
                      const myQuery = queryString.stringify(queryParams2);
                  
                  
                      setSearchParams(myQuery) 
                    }
            
            }}>➡</button>
        </div>
    )
}

export default Pagination