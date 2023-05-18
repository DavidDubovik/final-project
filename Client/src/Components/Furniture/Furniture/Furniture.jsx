import React, { useEffect, useState } from "react";

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
  changeColor,
} from "../../../Redux/products.reducer";
import { v4 as uuidv4 } from "uuid";

const AllProducts = (props) => {
  const dispatch = useDispatch();
  const { data, status, error, page, pageSize, listOfColors } = useSelector(
    (state) => {
      return state.allProducts;
    }
  );

  const { categories, brand, sort, minPrice, maxPrice } = useSelector(
    (state) => {
      return state.allProducts.filterBy;
    }
  );

  useEffect(() => {
    dispatch(
      fetchAsyncProducts({
        page,
        categories,
        brand,
        sort,
        minPrice,
        maxPrice,
        pageSize,
      })
    ).then((data) => setProduct(data));

    // Запись списка цветов
  }, [page, categories, brand, sort, minPrice, maxPrice, pageSize, dispatch]);

  useEffect(() => {
    // Запись списка цветов

    dispatch(fetchAsyncAllBrands("")).then((res) => {
      dispatch(setListColors(res.payload));
    });
  }, [dispatch]);

  // const testing = [...new Set(data.products.map(item=>item["colors"]).flat(1))]
  // console.log("test",listOfColors)

  const [products, setProduct] = useState([]);
  const [sortType] = useState({});

  // const currentFurniture = products.slice(firstIndex, lastIndex)

  const sortAscending = () => {
    dispatch(sortingProducts({ sort: "-currentPrice" }));
  };

  const sortDescending = () => {
    dispatch(sortingProducts({ sort: "+ currentPrice" }));
  };

  const sortName = () => {
    dispatch(sortingProducts({ sort: "+ name" }));
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

      // catString.push(event.target.name)
    } else if (catfilter.includes(event.target.name)) {
      // const test1 = catfilter.filter(el=>el!==event.target.name)
      setCatFilter(catfilter.filter((el) => el !== event.target.name));
    }
  };
  //color Filter State and function
  const [checkedState, setCheckedState] = useState(
    new Array(listOfColors.length).fill(false)
  );
  const [colorFilter, setcolorFilter] = useState([]);
  const setColorFilters = (event, index) => {
    // const updatedCheckedState = checkedState.map((item, index) =>
    //   index === position ? !item : item
    const newArray = [...checkedState];
    newArray[index] = !newArray[index];
    setCheckedState(newArray);

    // console.log(colorFilter);
    // console.log(event.target.checked);
    // console.log(index);
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
  };
  // const submitBrandFilter = () => {
  //   const colorFilterArray = colorFilter.join();

  //   dispatch(changeColor({ brand: colorFilterArray }));

  // };
  return (
    <Box sx={{ mx: "auto", maxWidth: "lg" }}>
      <main>
        <div className="pageCategories, left">
          <h2>Вибрані категорії</h2>
          <p>{categories}</p>
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
              <input
                type="checkbox"
                name="tables"
                onChange={categoryFilter}
              ></input>
              <span className="filters-checkbox__info">Столи</span>
            </label>
            <label className="filters-checkbox__item">
              <input
                type="checkbox"
                name="chairs"
                onChange={categoryFilter}
              ></input>
              <span className="filters-checkbox__info">Стільці</span>
            </label>
            <label className="filters-checkbox__item">
              <input
                type="checkbox"
                name="beds"
                onChange={categoryFilter}
              ></input>
              <span className="filters-checkbox__info">Ліжка</span>
            </label>
            <label className="filters-checkbox__item">
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

          <div className="filters-checkbox__container">
            <h3>Бренд</h3>
            {listOfColors.length > 1 ? (
              listOfColors.map((el, index) => {
                return (
                  <label className="filters-checkbox__item" key={uuidv4()}>
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
              onClick={submitCatFilter}
            >
              OK
            </button>
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
