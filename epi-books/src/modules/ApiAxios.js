import axios from "axios";

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTcxNjAzMTcsImV4cCI6MTcxODM2OTkxN30.bqrIYq7VrpiQgG5X885HS2AfENPgUz0dSGUkrW357Ek'

export default axios.create({
    baseURL: `https://striveschool-api.herokuapp.com/api`,
    headers: {'Authorization': `Bearer ${token}`}
  });