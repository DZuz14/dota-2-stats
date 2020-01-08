import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Layout from '../components/layout'

const ids = [147, 147, 147, 119, 120, 122, 122, 122, 122, 122, 179]

/**
 * @function Test
 */
const Test = () => {
  const [toggled, setToggled] = React.useState(false)
  const [idsCount, setIdsCount] = React.useState({})

  const handleToggle = () => {
    setToggled(!toggled)
  }

  return (
    <Layout>
      {ids.map((id, i) => {
        if (idsCount[id] === undefined) {
          setIdsCount({ ...idsCount, [id]: 1 })
        } else {
          console.log('Repeat.')
        }
      })}
    </Layout>
  )
}

export default Test
