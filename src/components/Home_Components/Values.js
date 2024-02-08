import React, { useState, useEffect } from 'react'
import ValueCard from '../cards/ValueCard'
const QUERY = encodeURIComponent('*[_type == "values"]')
const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;


function Values() {
  let [values, setValues] = useState([])

    useEffect(() => {
        getValues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // This function will fetch the locations that the store is open, and set it to the state variable locations
    function getValues() {
        fetch(URL)
            .then((res) => res.json())
            .then(({ result }) => {
                if(result.length > 0) {
                    setValues(result)
                }
            })
            .catch((err) => console.error(err))
    }

  return (
    <div className="flex md:flex-row justify-evenly md:gap-0 mt-[25px]">
      {values?.map((value, idx) => (
        <ValueCard value={value} key={idx} />
      ))}

    </div>
  )
}

export default Values