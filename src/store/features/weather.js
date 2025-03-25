import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getLatLon = createAsyncThunk('weather/getLatLon', 
  async (city, reduxObj)=>{
  const {getState, dispatch} = reduxObj;
  const { key } = getState().weather
  const result = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`)
  const cityInfo = result.data[0]
  dispatch(getWeather(cityInfo))
})

const getWeather = createAsyncThunk('weather/getWeather', 
  async (cityInfo, reduxObj)=>{
    const {lat, lon, local_names} = cityInfo;
    const { key } = reduxObj.getState().weather
    const result = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${key}&lang=ru&units=metric`)
    return {...result.data, name: local_names.ru}
})

const initialState = {
  key: 'fd0a6ca27d5cbf5772fec7ac633ae094',
  weather: null
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {  },
  extraReducers: (build)=>{
    build.addCase(getWeather.fulfilled, (state, actions)=>{
      state.weather = actions.payload
    })
  }
})

export const { } = weatherSlice.actions

export default weatherSlice.reducer