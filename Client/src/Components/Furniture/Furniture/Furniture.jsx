import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import Slider from "@mui/material/Slider";
import FurnitureItems from "../FurnitureItems/FurnitureItems";
import LoadingSpinner from "../../LoadingSpiner/LoadingSpiner.component";
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../../../Redux/products.reducer";
import "./Furniture.scss";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";

const AllProducts = (props) => {
  const { categorie, query } = useParams();
  const dispatch = useDispatch()
  const {data,status,error,page,pageSize} = useSelector(state => {
        return state.allProducts
    })
 
  const {categories,color,brand,sort,minPrice,maxPrice} = useSelector(state => {
        return state.allProducts.filterBy
    })
  const myParams = {
    categories,color,brand,sort,minPrice,maxPrice
  }
  useEffect(()=>{
    dispatch(fetchAsyncProducts({page,categories,color,brand,sort,minPrice,maxPrice,pageSize})).then(setProduct(data))
  },[page,categories,color,brand,sort,minPrice,maxPrice,pageSize])
  console.log("log1",data);
  const [products, setProduct] = useState([]);
  const [sortType] = useState({});

  const [currentPage, setCurrentPage] = useState(pageSize);
  const [productsPerPage, setProductsPerPage] = useState(3)

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  // const currentFurniture = products.slice(firstIndex, lastIndex)


  const sortAscending = () => {
    console.log("sort3")
  };

  const sortDescending = () => {
    console.log("sort2")
  };

  const sortName = () => {
    console.log("sort1")
  };

  const paginate = (pageNumber) =>  setCurrentPage(pageNumber)
  const prevPage = () =>  setCurrentPage(prev => prev -1)
  const nextPage = () =>  setCurrentPage(next => next +1)
 
  useEffect(() => {
    if (categorie) { 
      fetch(`/api/products/filter?categories=${categorie}`)
        .then(res=>res.json())
        .then(data=>setProduct(data.products))
    } 

    if (query) { 
      const response = async () => {
      const res = await fetch(`/api/products/search`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: query})
      }).then(res=>res.json())
      setProduct(res)
      }
      response()
    }
    else {
      fetch(`/api/products/`).then(res=>res.json()).then(data=>setProduct(data))
    }

  },[categorie, sortType]);
  
  return (
    <Box sx={{mx:'auto',maxWidth: 'lg'}}>
      <main>
        <div className="pageCategories, left">
          <h2>Cтільці кухонні</h2>
          <div className="fiters">
            <div className="fiters__item filters__price">
              <h3 className="filters-price__price">Price</h3>

              <Slider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[20, 50]}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
              />
              <div className="filters-price__slider"></div>
              <br />
              <div className="filters-price__container">
                <label className="filters-price__label">
                  <input
                    type="number"
                    min="0"
                    max="50000"
                    placeholder="200"
                    className="filters-price__input filters-price__info"
                  />
                </label>
                <span className="filters-price__line"></span>
                <label className="filters-price__label">
                  <input
                    type="number"
                    min="0"
                    max="50000"
                    placeholder="1500"
                    className="filters-price__input filters-price__info"
                  />
                </label>
                <button type="button" className="filters-price__button">
                  OK
                </button>
              </div>
            </div>
          </div>

          <div className="filters-checkbox__container">
            <h3>Матеріал</h3>

            <label className="filters-checkbox__item">
              <input type="checkbox"></input>
              <span className="filters-checkbox__info">
                Із суцільного дерева
              </span>
            </label>
            <label className="filters-checkbox__item">
              <input 
              type="checkbox"
              name="name"
              ></input>
              <span className="filters-checkbox__info">
                Комбіновані (дерево + метал)
              </span>
            </label>
          </div>

          <div className="filters-checkbox__container">
            <h3>Сидіння</h3>

            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">З твердим сидінням</span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">З м’яким сидінням</span>
            </label>
          </div>

          <div className="filters-checkbox__container">
            <h3>Висота</h3>

            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">60–85 mm</span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">більше 85 mm</span>
            </label>
          </div>

          <div className="filters-checkbox__container">
            <h3>Колір</h3>

            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">Дикий дуб</span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">Слонова кістка</span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">Медовий</span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">Ясен</span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">Морений</span>
            </label>
          </div>
        </div>

        <div className="pageCategories, right">
          <br />
          <div className="filter-box">
            <Filter 
              value={sortType} 
              onChangeSortAscending={(i) => sortAscending(i)} 
              onChangeSortDescending={(i) => sortDescending(i)}
              onChangeSortName={(i) => sortName(i)}
              />  
          </div>
          <br />
          {!products ? (
              <LoadingSpinner />
            ) : (
              <FurnitureItems furniture={data.products} />
             
            )}
          <Pagination 
            totalProducts={data.products?data.products:0}
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
          />
                         
        </div>
      </main>
      
    </Box>
  );
};
export default AllProducts;




