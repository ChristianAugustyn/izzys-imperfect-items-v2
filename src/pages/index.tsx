import React, { FC } from "react"
import { Link } from "gatsby"
import HeroCarousel from '../components/hero-carousel/hero-carousel'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: FC = () => (
  <Layout>
    <Seo title="Home" />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <HeroCarousel/>

  </Layout>
)

export default IndexPage
