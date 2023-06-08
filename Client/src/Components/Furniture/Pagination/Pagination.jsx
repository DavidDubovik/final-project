import React,{useState} from 'react'
import queryString from "query-string";
import { useDispatch,useSelector} from "react-redux";
import {

    setPage,
  } from "../../../Redux/products.reducer";
  import { useSearchParams } from "react-router-dom";
  import "./pagination.styles.scss"

const Pagination = ({totalProducts}) => {
    const [, setSearchParams] = useSearchParams("");
    const [active, setActive] = useState("1")

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
                    dispatch(setPage(Number(startPage)-1)) 
                    const queryParams2 = {
                        categories,
                        brand,
                        sort,
                        minPrice,
                        maxPrice,
                        startPage:Number(startPage)-1,
                        perPage,
                      };
                      Object.entries(queryParams2).forEach(([k, v]) => {
                        if (!v || v.length === 0) delete queryParams2[k];
                      });
                      const myQuery = queryString.stringify(queryParams2);
                  
                  
                      setSearchParams(myQuery)
                }
               
            }

            }>⬅</button>
            <div className='page'>
                {   
                    pageNumbers.map(number => (
                        <button key={number} className={`page-item ${active == number && 'active'}`} onClick={() => {
                          setActive(number)
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
                                if (!v || v.length === 0) delete queryParams2[k];
                              });
                              const myQuery = queryString.stringify(queryParams2);
                          
                          
                              setSearchParams(myQuery)
                            }}>
                           
                                {number}
                            
                        </button>
                    ))
                }
            </div>
            <button type='button' onClick={()=>{
              
               if (startPage <(totalProducts / perPage))
                   { dispatch(setPage(Number(startPage)+Number(1)))
                    const queryParams2 = {
                        categories,
                        brand,
                        sort,
                        minPrice,
                        maxPrice,
                        startPage:Number(startPage)+1,
                        perPage,
                      };
                      Object.entries(queryParams2).forEach(([k, v]) => {
                        if (!v || v.length === 0) delete queryParams2[k];
                      });
                      const myQuery = queryString.stringify(queryParams2);
                  
                  
                      setSearchParams(myQuery) 
                    }
            
            }}>➡</button>
        </div>
    )
}

export default Pagination