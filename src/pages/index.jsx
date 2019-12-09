import React from "react";

import Layout from "../components/Layout/Layout";

import HomeHero from "../components/PageSections/HomeHero/HomeHero";
import HomeAbout from "../components/PageSections/HomeAbout/HomeAbout";
import HomeSkillset from "../components/PageSections/HomeSkillset/HomeSkillset";
import HomePortfolio from "../components/PageSections/HomePortfolio/HomePortfolio";
import HomeContact from "../components/PageSections/HomeContact/HomeContact";

const HomePage = () => (
  <Layout title="test">
    <HomeHero />
    <HomeAbout />
    <HomeSkillset />
    <HomePortfolio />
    <HomeContact />
  </Layout>
);

export default HomePage;
