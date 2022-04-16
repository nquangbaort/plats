import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import AnyToEarn from "@components/AnyToEarn"
import Banner from "@components/Banner"
import Layout from "@components/Layout"
import MetaHub from "@components/MetaHub"
import WhyPlats from "@components/WhyPlats/WhyPlats"
import MetaPool from "@components/MetaPool"
import GameHub from "@components/GameHub"
import Backer from "@components/Backer"
import Team from "@components/Team"
import Roadmap from "@components/Roadmap"
import ScrollToTop from "@components/ScrollToTop"
import LearningHub from "@components/LearningHub"
import Seo from "@components/seo"

import useDevice from "@hooks/useDevice"
import "@scss/style.scss"


const IndexPage = ({ data }) => {

  
  const { isMobile, isTablet } = useDevice()

  const bannerImage = (isMobile || isTablet) ? getImage(data.bannerMobile) : getImage(data.banner) 
  const metahubImage = getImage(data.metahub)
  const roadmapImage = isMobile ? getImage(data.roadmapVertical) :getImage(data.roadmapHorizontal)
  const metaverseImage = getImage(data.metaverse)
  const learningHubImages = [
    getImage(data.learningHub1),
    getImage(data.learningHub2),
    getImage(data.learningHub3)
  ]

  let AOS;
  React.useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease',
      anchorPlacement: 'top-bottom'
    });
  }, []);

  React.useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <Layout>
      <Seo title="Plats Network" />
      <Banner image={bannerImage} />
      <MetaHub image={metahubImage} />
      <AnyToEarn />
      <MetaPool image={metaverseImage} />
      <GameHub />
      <LearningHub images={learningHubImages} />
      <WhyPlats />
      <Roadmap image={roadmapImage} />
      <Backer />
      <Team />
      <ScrollToTop />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    banner: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    }
    bannerMobile: file(relativePath: {eq: "banner-mobile.png"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    }
    metahub: file(relativePath: { eq: "metahub.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
    metaverse: file(relativePath: { eq: "metapool-bg.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    }
    roadmapHorizontal: file(relativePath: { eq: "roadmap.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, quality: 100)
      }
    },
    roadmapVertical: file(relativePath: { eq: "roadmap-2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, quality: 100)
      }
    },
    learningHub1: file(relativePath: { eq: "learning-hub-1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    },
    learningHub2: file(relativePath: { eq: "learning-hub-2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    },
    learningHub3: file(relativePath: { eq: "learning-hub-3.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    },
  }
`
