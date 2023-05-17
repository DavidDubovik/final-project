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
  sortingProducts
} from "../../../Redux/products.reducer";

const AllProducts = (props) => {
  const { categorie, query } = useParams();
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
  //   if (categorie) {
  //     fetch(`/api/products/filter?categories=${categorie}`)
  //       .then(res=>res.json())
  //       .then(data=>setProduct(data.products))
  //   }

  //   if (query) {
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
  //     }
  //     response()
  //   }
  //   else {
  //     fetch(`/api/products/`).then(res=>res.json()).then(data=>setProduct(data))
  //   }

  // },[categorie, sortType]);

  //Price slider
  const [valuePriceSlider, setValuePriceSlider] = useState([1, 50000]);
  function valuetext(value) {
    return `${value}грн`;
  }

  const handleChangePriceSlider = (event, newValue) => {
    setValuePriceSlider(newValue);
  };
  const submitPriceFilter = () => {
    dispatch(setMinPrice({ minPrice: valuePriceSlider[0] }));
    dispatch(setMaxPrice({ maxPrice: valuePriceSlider[1] }));
  };
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
                    min={minPrice}
                    max={maxPrice}
                    placeholder={valuePriceSlider[0]}
                    className="filters-price__input filters-price__info"
                  />
                </label>
                <span className="filters-price__line"></span>
                <label className="filters-price__label">
                  <input
                    type="number"
                    min={minPrice}
                    max={maxPrice}
                    placeholder={valuePriceSlider[1]}
                    className="filters-price__input filters-price__info"
                  />
                </label>
                <button
                  type="button"
                  className="filters-price__button"
                  onClick={submitPriceFilter}
                >
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
              <input type="checkbox" name="name"></input>
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
          {!data.products ? (
            <LoadingSpinner />
          ) : (
            <FurnitureItems furniture={data.products} />
          )}
          <Pagination
            totalProducts={data.productsQuantity}
          />
        </div>
      </main>
    </Box>
  );
};
export default AllProducts;
