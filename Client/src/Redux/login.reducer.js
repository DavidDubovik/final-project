import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// registration fetch
export const createAccountFetch = createAsyncThunk(
  'login/createAccountFetch',
  async ({ firstName, lastName, email, password }, { rejectWithValue, dispatch }) => {

    try {
      const response = await fetch(`api/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          login: firstName
        }),
      })

      const customer = await response.json()
      if(response.ok) {
        dispatch(
          loginCustomerFetch({ email, password })
        )
      }
      else{
        throw new Error('Could not get data for login')
      }

      return customer
    }
    catch (error) {
      return rejectWithValue(error.message)
    }
  })

// login fetch
export const loginCustomerFetch = createAsyncThunk(
  'login/loginCustomerFetch ',
  async ({ email, password }, { rejectWithValue }) => {

    try {
      const loggedIn = await fetch(`api/customers/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            loginOrEmail: email,
            password,
          })
        })

      const loggedCustomer = await loggedIn.json()
      if(loggedIn.ok){
        const savePassword = password
        console.log(savePassword);
      }
      
      return loggedCustomer
    }
    catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


// slice function

const loginReducer = createSlice({
  name: 'login',

  initialState: {
    isLogged: {
      success: false,
      token: ''
    },
  },

  reducers: {
    loguotCustomer: (state, action) => {     
      state.isLogged.token = ''
      state.isLogged.success = false
    }
  },


})

export const { loguotCustomer } = loginReducer.actions

export default loginReducer.reducer