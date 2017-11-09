import React from 'react'
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class SecondPage extends React.Component {
  render() {
    const postEdges = this.props.data.id.edges
    {console.log(postEdges[0].node.title)}
    return (
    <div>
      <h1>Title: {postEdges[0].node.title}</h1>
      <h1>Description: {postEdges[0].node.description}</h1>
      <h1>Number: {postEdges[0].node.number}</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>)
  }
}

SecondPage.propTypes = propTypes

export default SecondPage

export const pageQuery = graphql`
  query PageQuery {
    id: allContentfulPost {
      edges {
        node {
          id
          title
          description
          number
        }
      }
    }
  }
`
