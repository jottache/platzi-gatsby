import React from "react"
import { Jumbo } from "../components/exports"
import { Layout } from "../components/exports"
import { SEO }  from "../components/exports"

/* export const query = graphql`
query GET_DATA{
  allStripeSku{
    edges{
      node{
        id
        price
        product{
          name
          metadata{
            description
            img
            swear
          }
        }
      }
    }
  }
}
  
` */


const IndexPage = () => {
  return(
  <Layout>
    <SEO title="Home" />
    <Jumbo />
  </Layout>
  )
}
export default IndexPage