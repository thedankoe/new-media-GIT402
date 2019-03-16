import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PageWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  div {
    :not(:last-child) {
      margin-right: ${props => props.theme.textSpace};
    }
  }
`

const ImageWrapper = styled.div`
  width: 50rem;
  margin-bottom: ${props => props.theme.textSpace};
  border-radius: 6px;
  overflow: hidden;
  box-shadow: ${props => props.theme.bs};
`

const InfoWrapper = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
  }

  p {
    font-size: 2.2rem;
    font-weight: 600;
    color: #fff;

    span {
      font-weight: 400;
      color: ${props => props.theme.lightGrey};
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageWrapper>
      <div>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <InfoWrapper>
          <p>Age: <span>26</span></p>
          <p>Gender: <span>Male</span></p>
          <p>Genre: <span>Dark</span></p>
          <p>Awards: <span>Darkest Comedian 2018</span></p>
          <p>Medium: <span>Stand-up, Netflix</span></p>
        </InfoWrapper>
      </div>
      <InfoWrapper>
        <h2>Bio:</h2>
        <p>
          Rodney Johnson considers himself a comedian that tells stories with the darkest endings possible, while remaining funny (to most).
          He finds himself all over the country on stage, he never knew jokes he told as a kid would give him this much exposure.
          With multiple top-notch Netflix specials, Rodney plans on creating a TV show as his next big venture.
        </p>
      </InfoWrapper>
    </PageWrapper>
  </Layout>
)

export default IndexPage
