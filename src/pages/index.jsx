import React from "react"

import Layout from "../components/Layout/Layout"

import HomeHero from "../components/PageSections/HomeHero/HomeHero"
import HomeAbout from "../components/PageSections/HomeAbout/HomeAbout"
import HomeSkillset from "../components/PageSections/HomeSkillset/HomeSkillset"

const HomePage = () => (
  <Layout title="test">
    <HomeHero />
    <HomeAbout />
    <HomeSkillset />
  </Layout>
)

export default HomePage
