import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Project from "../components/project";
import About from "../components/about";
import NordcapeToPortugal from "../components/nordcapeToPortugal";
import MoscowToNordcape from "../components/moscowToNordcape";
import Book from "../components/book";
import TakeAction from "../components/takeAction";
import { Helmet } from "react-helmet";
import BuyBook from "../components/buyBook";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="google-site-verification"
          content="z-S1FqEuF2tv0iqBlHUOdNqa2AxgL23wJ5czteELOWA"
        />
      </Helmet>
      <Seo />
      <Hero />
      <Project />
      <About />
      <NordcapeToPortugal />
      <MoscowToNordcape />
      <Book />
      <TakeAction />
      <BuyBook />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String) {
    locales: allLocale(
      filter: {
        ns: { in: ["home", "nav", "subs", "buybook"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
