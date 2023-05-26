import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import FurnitureItems from "../FurnitureItems/FurnitureItems";
import LoadingSpinner from "../../LoadingSpiner/LoadingSpiner.component";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncProducts,
  fetchAsyncAllBrands,
} from "../../../Redux/products.reducer";
import "./Furniture.scss";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import {
  setMinPrice,
  setMaxPrice,
  sortingProducts,
  changeCategory,
  setListColors,
  setParamsLink,
  changeColor,
  setPage,
} from "../../../Redux/products.reducer";
import { v4 as uuidv4 } from "uuid";
import queryString from "query-string";

const AllProducts = (props) => {
  const [searchParams, setSearchParams] = useSearchParams("");

  const {
    data,
    status,
    startPage,
    perPage,
    listOfColors,
    paramsLink,
  } = useSelector((state) => {
    return state.allProducts;
  });

  const { categories, brand, sort, minPrice, maxPrice } = useSelector(
    (state) => {
      return state.allProducts.filterBy;
    }
  );

  const dispatch = useDispatch();
  //отправка запросов по парамтрам и запись в стейт первая загрузка
  useEffect(() => {
    const paramsN = {};

    searchParams.forEach((value, key) => {
      paramsN[key] = value;
    });
    const myQuery = queryString.stringify(paramsN);

    dispatch(fetchAsyncProducts(myQuery));
  }, [dispatch, searchParams]);

  // useEffect(() => {
  //   dispatch(fetchAsyncProducts(paramsLink))
  //   setSearchParams(paramsLink);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [paramsLink]);
  //сохраняем линк со стейта
  useEffect(() => {
    const queryParams = {
      categories,
      brand,
      sort,
      minPrice,
      maxPrice,
      startPage,
      perPage,
    };
    Object.entries(queryParams).forEach(([k, v]) => {
      if (v.length === 0) delete queryParams[k];
    });
    const myQuery = queryString.stringify(queryParams);
    dispatch(setParamsLink(myQuery));
  }, [
    categories,
    brand,
    sort,
    minPrice,
    maxPrice,
    startPage,
    perPage,
    dispatch,
  ]);


  // useEffect(() => {
  //   setSearchParams(paramsLink);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [paramsLink]);



  useEffect(() => {
    // Запись списка цветов

    dispatch(fetchAsyncAllBrands()).then((res) => {
      dispatch(setListColors(res.payload));
    });
  }, [dispatch]);

  const [sortType] = useState({});

  const sortAscending = () => {
    dispatch(sortingProducts({ sort: "-currentPrice" }));
    dispatch(setPage(1));
    const queryParams2 = {
      categories,
      brand,
      sort: "-currentPrice",
      minPrice,
      maxPrice,
      startPage,
      perPage,
    };
    Object.entries(queryParams2).forEach(([k, v]) => {
      if (v.length === 0) delete queryParams2[k];
    });
    const myQuery = queryString.stringify(queryParams2);


    setSearchParams(myQuery)
  };

  const sortDescending = () => {
    dispatch(sortingProducts({ sort: "+ currentPrice" }));
    dispatch(setPage(1));
    const queryParams2 = {
      categories,
      brand,
      sort: "+ currentPrice",
      minPrice,
      maxPrice,
      startPage,
      perPage,
    };
    Object.entries(queryParams2).forEach(([k, v]) => {
      if (v.length === 0) delete queryParams2[k];
    });
    const myQuery = queryString.stringify(queryParams2);


    setSearchParams(myQuery)
  };

  const sortName = () => {
    dispatch(sortingProducts({ sort: "+ name" }));
    dispatch(setPage(1));
    const queryParams2 = {
      categories,
      brand,
      sort: "+ name",
      minPrice,
      maxPrice,
      startPage,
      perPage,
    };
    Object.entries(queryParams2).forEach(([k, v]) => {
      if (v.length === 0) delete queryParams2[k];
    });
    const myQuery = queryString.stringify(queryParams2);


    setSearchParams(myQuery)
  };

  //Price slider
  const [valuePriceSlider, setValuePriceSlider] = useState([1, 50000]);
  function valuetext(value) {
    return `${value}грн`;
  }

  const handleChangePriceSlider = (event, newValue) => {
    setValuePriceSlider(newValue);
  };

  const [catfilter, setCatFilter] = useState([]);
  const categoryFilter = (event) => {
    if (!catfilter.includes(event.target.name)) {
      setCatFilter([...catfilter, event.target.name]);

    } else if (catfilter.includes(event.target.name)) {
      setCatFilter(catfilter.filter((el) => el !== event.target.name));
    }
  };

  const [checkedState, setCheckedState] = useState(
    new Array(listOfColors && listOfColors.length).fill(false)
  );
  const [colorFilter, setcolorFilter] = useState([]);
  const setColorFilters = (event, index) => {
    const newArray = [...checkedState];
    newArray[index] = !newArray[index];
    setCheckedState(newArray);

    if (!colorFilter.includes(event.target.name)) {
      setcolorFilter([...colorFilter, event.target.name]);
    } else if (colorFilter.includes(event.target.name)) {
      setcolorFilter(colorFilter.filter((el) => el !== event.target.name));
    }
  };

  const submitCatFilter = () => {
    const testTest = catfilter.join();
    const colorFilterArray = colorFilter.join();
    dispatch(changeColor({ brand: colorFilterArray }));
    dispatch(changeCategory({ categories: testTest }));
    dispatch(setMinPrice({ minPrice: valuePriceSlider[0] }));
    dispatch(setMaxPrice({ maxPrice: valuePriceSlider[1] }));
    dispatch(setPage(1));

    const queryParams2 = {
      categories: testTest,
      brand: colorFilterArray,
      sort,
      minPrice: valuePriceSlider[0],
      maxPrice: valuePriceSlider[1],
      startPage,
      perPage,
    };
    Object.entries(queryParams2).forEach(([k, v]) => {
      if (v.length === 0) delete queryParams2[k];
    });
    const myQuery = queryString.stringify(queryParams2);


    setSearchParams(myQuery)
  };

  return (
    <Box sx={{ mx: "auto", maxWidth: "lg" }}>
      <main>
        <div className="pageCategories, left">
          <h2 className="filters_selected">Вибрані категорії:</h2>
          <p className="filters_categories">{categories}</p>
          <h2 className="filters_selected">Вибрані бренди:</h2>
          <p className="filters_categories">{brand}</p>
          <h2 className="filters_selected">Вибраний діапазон цін:</h2>
          <p className="filters_categories">
            {minPrice}:{maxPrice}
          </p>
          <div className="fiters">
            <div className="fiters__item filters__price">
              <h3 className="filters-price__price">Ціна:</h3>

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
          <div className="filters_filter-brand">
            <div className="filters-checkbox__container">
              <h3 className="filters_selected">Бренд</h3>
              {listOfColors && listOfColors.length > 1 ? (
                listOfColors.map((el, index) => {
                  return (
                    <label
                      className="filters_categories filters-checkbox__item"
                      key={uuidv4()}
                    >
                      <input
                        type="checkbox"
                        name={el}
                        checked={checkedState[index]}
                        onChange={(event) => {
                          setColorFilters(event, index);
                        }}
                      ></input>
                      <span className="filters-checkbox__info">{el}</span>
                    </label>
                  );
                  // <p>1</p>
                })
              ) : (
                <p>1</p>
              )}
              <button
                type="button"
                className="filters-price__button"
                onClick={() => {
                  submitCatFilter();
                }}
              >
                OK
              </button>
            </div>
            <div className="filters-checkbox__container">
              <h3 className="filters_selected">Категорії</h3>

              <label className="filters_categories filters-checkbox__item">
                <input
                  type="checkbox"
                  name="tables"
                  onChange={categoryFilter}
                ></input>
                <span className="filters-checkbox__info">Столи</span>
              </label>
              <label className="filters_categories filters-checkbox__item">
                <input
                  type="checkbox"
                  name="chairs"
                  onChange={categoryFilter}
                ></input>
                <span className="filters-checkbox__info">Стільці</span>
              </label>
              <label className="filters_categories filters-checkbox__item">
                <input
                  type="checkbox"
                  name="beds"
                  onChange={categoryFilter}
                ></input>
                <span className="filters-checkbox__info">Ліжка</span>
              </label>
              <label className="filters_categories filters-checkbox__item">
                <input
                  type="checkbox"
                  name="housingfurniture"
                  onChange={categoryFilter}
                ></input>
                <span className="filters-checkbox__info">Корпусні меблі</span>
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
        <div className="pageCategories, right">
          <br />
          <div className="filters_selected filter-box">
            <Filter
              value={sortType}
              onChangeSortAscending={(i) => sortAscending(i)}
              onChangeSortDescending={(i) => sortDescending(i)}
              onChangeSortName={(i) => sortName(i)}
            />
          </div>
          <br />
          {!(status === "loaded") ? (
            <LoadingSpinner />
          ) : data.products.length > 0 ? (
            <FurnitureItems furniture={data.products} />
          ) : (
            <p>С заданими фільтрами товарів не знайдено. Виберіть фільтри</p>
          )}

          <Pagination totalProducts={data.productsQuantity} />
        </div>
      </main>
    </Box>
  );
};
export default AllProducts;
