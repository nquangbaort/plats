import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"

import useDevice from "../../hooks/useDevice"
import Metaverse from "../../images/metaverse.svg"

import "./MetaPool.scss"

const MetaPool = ({ image }) => {
  const { isTablet, isMobile } = useDevice()

  return (
    <main className="meta-pool" data-aos="fade-up">
      <div className="right-parallelogram-container">
        <div className="rectangle-right"></div>
        <div className="parallelogram-right"></div>
      </div>

      <Row className="align-items-center justify-content-lg-start justify-content-md-center justify-content-sm-center">
        <Col sm={2} lg={6} className="meta-pool__left-col">
          {!isMobile && (
            <div className="meta-pool__right-parallelogram">
              <GatsbyImage image={image} alt="Meta poll icon" />
              <div className="meta-pool__metaverse">
                <Metaverse  />
              </div>
            </div>
          )}
        </Col>
        <Col
          className="meta-pool__right-col text-align-sm-center"
          lg={{ span: 3, offset: 0 }}
          md={9}
          sm={9}
        >
          <h1 className="meta-pool__title  text-lg-start text-center">Meta Pool</h1>
          <Stack direction="horizontal" gap={5}>
            {(isTablet || isMobile) && (
              <Metaverse />
            )}
            <p className="meta-pool__description">
              Where Clients pour their market-ready products in to form a pool
              of choice for Referrers present to Users. Smart Contract shall
              ensure smooth run of the whole mechanism.
            </p>
          </Stack>
        </Col>
      </Row>
    </main>
  )
}

export default MetaPool
