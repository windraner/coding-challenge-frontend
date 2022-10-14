import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'

loadProgressBar({ showSpinner: false }, axios)

export default function request ({ url = '', method = 'get', params = {}, data = {} }) {
  return axios({
    baseURL: 'https://content-sheets.googleapis.com/v4/spreadsheets/1La-EJVOrNt3AwWHYvhuCQ5SRtFE9h_kYjgx0dau1HN4',
    url,
    method,
    headers: {
      'content-type': 'application/json'
    },
    params: {
      ...params,
      key: process.env.REACT_APP_API_KEY
    },
    data
  })
}
