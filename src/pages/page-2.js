import React from 'react'
import Link from 'gatsby-link'

export default class SecondPage extends React.Component {
  render() {
    return (
    <div>
      <h1>Hye</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>)
  }
}
