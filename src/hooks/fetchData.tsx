import React from 'react'
import axios from 'axios'

const API_URL = 'https://api.opendota.com/api'
const API_KEY = '03b28488-62eb-4218-bcd9-7c5e5a134845'

/**
 * @function fetchData
 */
const fetchData = (route: string) => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [err, setErr] = React.useState(false)

  React.useEffect(() => {
    axios
      .get(`${API_URL}/${route}?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setErr(true)
      })
  }, [])

  return { data, loading, err }
}

export default fetchData
