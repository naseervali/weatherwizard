import axios from "axios"

const APP_KEY="a8d664a99b147c036d0cbcde732a32cf"
const URL= "https://api.openweathermap.org/data/2.5/weather"

const Data= async(query)=>{
  let {data}=await axios.get(URL,{
    params:{
      zip:query,
        q:query,
        units:"metrics",
        appid:APP_KEY
    }
  })
  return data
}
export default Data;