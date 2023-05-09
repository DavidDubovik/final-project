import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import Slider from "@mui/material/Slider";
import ChairsItems from "../ChairsItems/ChairsItems";
import LoadingSpinner from "../../LoadingSpiner/LoadingSpiner.component";
import Box from '@mui/material/Box';

import "./Chairs.scss";

const AllProducts = (props) => {
  const { categorie } = useParams();
  const [products, setProduct] = useState(null);
  useEffect(() => {
    if (categorie) { fetch(`/api/products/filter?categories=${categorie}`).then(res=>res.json()).then(data=>setProduct(data.products))}
    else {
    fetch(`/api/products/`).then(res=>res.json()).then(data=>setProduct(data))}

  },[categorie]);
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
              <input type="checkbox"></input>{" "}
              <span className="filters-checkbox__info">
                Із суцільного дерева
              </span>
            </label>
            <label className="filters-checkbox__item">
              <input type="checkbox"></input>{" "}
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
            <label className="filter-box__title">Сортувати по: </label>
            <select className="filter">
              <option value="1">Filter_1</option>
              <option value="2">Filter_2</option>
              <option value="3">Filter_3</option>
              <option value="4">Filter_4</option>
            </select>
          </div>
          <br />
          <br />
          {!products ? (
              <LoadingSpinner />
            ) : (
              <ChairsItems chairs={products} />
            )}
          
        </div>
      </main>
    </Box>
  );
};
export default AllProducts;
