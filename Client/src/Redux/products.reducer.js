import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  data: [],
  filterBy: {
    categories: "",
    brand: "",
    trendingProduct: "",
    sort: "",//-price,+price,+-name
    minPrice: 1,
    maxPrice: 50000,
  },
  status: null,
  error: "",
  startPage: 1,
  perPage: 6,
  listOfColors:[],
  paramsLink: "",
};

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async (queri, { rejectWithValue, dispatch }) => {
    //   const queryParams = { ...queri, startPage: queri.page, perPage: queri.pageSize };
    //   delete queryParams.page
    //   delete queryParams.pageSize
    
    //   //deleate empty filters
    //   Object.entries(queryParams).forEach(([k, v]) => {
    //     if (v.length === 0) delete queryParams[k];
    // });
    //   const myQuery = queryString.stringify(queryParams);
   
      dispatch(setParamsLink(queri));
      console.log(queri)
    try {
      const response = await fetch(
        `/api/products/filter?${queri}`
      )
        
      const res = await response.json()

      return res;
      
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchAsyncAllBrands = createAsyncThunk("search/fetchAsyncAllProducts",
  async (_,{rejectWithValue}) =>{
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/`
      )
      
      const dataZ = await response.json()
      const mycolors =  [...new Set(dataZ.map(item=>item["brand"]).flat(1))]

      return mycolors;
      
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
)
export const fetchAsyncAllProducts = createAsyncThunk("search/fetchAsyncAllProducts",
  async (_,{rejectWithValue}) =>{
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/`
      )
      
      const dataZ = await response.json()

      return dataZ;
      
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
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
      state.filterBy.brand = action.payload.brand;
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
      state.startPage = action.payload;
    },
    //set list of colors 
    setListColors(state,action){
      state.listOfColors= action.payload;
    },
    //set params
    setParamsLink(state,action){
      state.paramsLink = action.payload;
    }
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        state.params = action.payload;
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchAsyncProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      });
  },
});
export const {
  setParamsLink,
  changeCategory,
  changeColor,
  setMinPrice,
  setMaxPrice,
  sortingProducts,
  setPage,
  setListColors
} = allprodreducer.actions;
export default allprodreducer.reducer;
