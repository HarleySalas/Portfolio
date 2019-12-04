import React from "react"

import Layout from "../components/Layout/Layout"

import HomeHero from "../components/PageSections/HomeHero/HomeHero"
import HomeAbout from "../components/PageSections/HomeAbout/HomeAbout"

const HomePage = () => (
  <Layout title="test">
    <HomeHero />
    <HomeAbout />
  </Layout>
)

export default HomePage
