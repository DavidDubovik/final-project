import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import queryString from "query-string";

const initialState = {
  data: [],
  filterBy: {
    categories: "",
    color: "",
    trendingProduct: "",
    sort: "",//-price,+price,+-name
    minPrice: 1,
    maxPrice: 50000,
  },
  status: null,
  error: "",
  page: 1,
  pageSize: 5,
  listOfColors:[]
};

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async (queri, { rejectWithValue }) => {
    const queryParams = { ...queri, startPage: queri.page, perPage: queri.pageSize };
    delete queryParams.page
    delete queryParams.pageSize
   
    //deleate empty filters
    Object.entries(queryParams).forEach(([k, v]) => {
      if (v.length === 0) delete queryParams[k];
  });
    const myQuery = queryString.stringify(queryParams);

    try {
      const response = await fetch(
        `http://localhost:3000/api/products/filter?${myQuery}`
      )
        console.log(myQuery)
     
      const dataZ = await response.json()
     
      return dataZ;
      
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchAsyncSearch = createAsyncThunk("search/fetchAsyncSearch",
  async (data,{rejectWithValue}) =>{

  }
)

const allprodreducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    // change category
    changeCategory(state, action) {
      state.filterBy.categories = action.payload.categories;
    },
    // change color
    changeColor(state, action) {
      state.filterBy.color = action.payload.color;
    },

    // sorting products
    sortingProducts(state, action) {
      state.filterBy.sort = action.payload.sort;
    },
    // set min  Price
    setMinPrice: (state, action) => {
      state.filterBy.minPrice = action.payload.minPrice;
    },
    // set max  Price
    setMaxPrice: (state, action) => {
      state.filterBy.maxPrice = action.payload.maxPrice;
    },

    //set page for pagination
    setPage(state, action) {
      state.page = action.payload;
    },
    //set list of colors 
    setListColors(state,action){
      state.listOfColors= action.payload;
    }
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchAsyncProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "loaded";
      });
  },
});
export const {
  changeCategory,
  changeColor,
  setMinPrice,
  setMaxPrice,
  sortingProducts,
  setPage,
  setListColors
} = allprodreducer.actions;
export default allprodreducer.reducer;
