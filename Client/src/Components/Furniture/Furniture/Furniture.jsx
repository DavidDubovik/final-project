import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import FurnitureItems from "../FurnitureItems/FurnitureItems";
import LoadingSpinner from "../../LoadingSpiner/LoadingSpiner.component";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../../../Redux/products.reducer";
import "./Furniture.scss";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import {
  setMinPrice,
  setMaxPrice,
  sortingProducts,
  changeCategory
} from "../../../Redux/products.reducer";

const AllProducts = (props) => {
 
  const dispatch = useDispatch();
  const { data, status, error, page, pageSize } = useSelector((state) => {
    return state.allProducts;
  });

  const { categories, color,  sort, minPrice, maxPrice } = useSelector(
    (state) => {
      return state.allProducts.filterBy;
    }
  );

  useEffect(() => {
    
    dispatch(
      fetchAsyncProducts({
        page,
        categories,
        color,
        sort,
        minPrice,
        maxPrice,
        pageSize,
      })
    ).then((data) => setProduct(data));
  }, [page, categories, color, sort, minPrice, maxPrice, pageSize, dispatch]);

  const [products, setProduct] = useState([]);
  const [sortType] = useState({});

  // const currentFurniture = products.slice(firstIndex, lastIndex)

  const sortAscending = () => {
    dispatch(sortingProducts({sort:"-currentPrice"}))
    
  };

  const sortDescending = () => {
    dispatch(sortingProducts({sort:"+ currentPrice"}))
  };

  const sortName = () => {
    dispatch(sortingProducts({sort:"+ name"}))
  };
 
  // useEffect(() => {

  
  //     const response = async () => {
  //     const res = await fetch(`/api/products/search`, {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({query: query})
  //     }).then(res=>res.json())
  //     setProduct(res)
  //     console.log(res)
  //     }
  //     response()

  // },[query]);

  //Price slider
  const [valuePriceSlider, setValuePriceSlider] = useState([1, 50000]);
  function valuetext(value) {
    return `${value}грн`;
  }

  const handleChangePriceSlider = (event, newValue) => {
    setValuePriceSlider(newValue);
  };

  
  const [catfilter,setCatFilter]=useState([])
  const categoryFilter = (event)=>{
    
    if (!(catfilter.includes(event.target.name))){
      setCatFilter([...catfilter,event.target.name])
      
      // catString.push(event.target.name)
    } else if (catfilter.includes(event.target.name)){
      // const test1 = catfilter.filter(el=>el!==event.target.name)
      setCatFilter(catfilter.filter(el=>el!==event.target.name))

    }

  }
  const submitCatFilter = () =>{
    console.log(catfilter)
    console.log(catfilter.join())
    const testTest = catfilter.join()
    
    dispatch(changeCategory({categories:testTest}))
    dispatch(setMinPrice({ minPrice: valuePriceSlider[0] }));
    dispatch(setMaxPrice({ maxPrice: valuePriceSlider[1] }));
  }
  return (
    <Box sx={{ mx: "auto", maxWidth: "lg" }}>
      <main>
        <div className="pageCategories, left">
          <h2>Усі товари</h2>
          <div className="fiters">
            <div className="fiters__item filters__price">
              <h3 className="filters-price__price">Price</h3>

              <Slider
                getAriaLabel={() => "Ціна товарів"}
                value={valuePriceSlider}
                onChange={handleChangePriceSlider}
                min={1}
                max="50000"
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
              <div className="filters-price__slider"></div>
              <br />
              <div className="filters-price__container">
                <label className="filters-price__label">
                  <input
                    type="number"
                    min={Number(minPrice)}
                    max={Number(maxPrice)}
                    placeholder={valuePriceSlider[0]}
                    className="filters-price__input filters-price__info"
                  />
                </label>
                <span className="filters-price__line"></span>
                <label className="filters-price__label">
                  <input
                    type="number"
                    min={Number(minPrice)}
                    max={Number(maxPrice)}
                    placeholder={valuePriceSlider[1]}
                    className="filters-price__input filters-price__info"
                  />
                </label>
                <button
                  type="button"
                  className="filters-price__button"
                  onClick={submitCatFilter}
                >
                  OK
                </button>
              </div>
            </div>
          </div>

          <div className="filters-checkbox__container">
            <h3>Категорії</h3>


            <label className="filters-checkbox__item">
              <input type="checkbox" name="tables" onChange={categoryFilter}></input>
              <span className="filters-checkbox__info">
                Столи
              </span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox" name="chairs" onChange={categoryFilter}></input>
              <span className="filters-checkbox__info">
                Стільці
              </span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox" name="beds" onChange={categoryFilter}></input>
              <span className="filters-checkbox__info">
                Ліжка
              </span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox" name="housingfurniture" onChange={categoryFilter}></input>
              <span className="filters-checkbox__info">
                Корпусні меблі
              </span>
            </label>
            <button
            type="button"
            className="filters-price__button"
            onClick={submitCatFilter}
          >
            OK
          </button>
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
          {!data.products ? (
            <LoadingSpinner />
          ) : (
            <FurnitureItems furniture={data.products} />

          )}
          
          <Pagination  totalProducts={data.productsQuantity} />
        </div>
      </main>
    </Box>
  );
};
export default AllProducts;
