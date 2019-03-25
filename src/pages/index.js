import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { HeadingStyleLight, SubHeadingStyleLight } from "../components/styles/TextStyles";

export const PageWrapper = styled.div`
  width: 65%;
  margin: 0 auto;

  div {
    :not(:last-child) {
      margin-right: ${props => props.theme.textSpace};
    }
  }
`

const PageInfo = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  display: flex;
  align-items: center;
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

const MapsWrapper = styled.div`
  width: 640px;
  margin: ${props => props.theme.textSpace} auto 0 auto;
  text-align: center;
`

const IndexPage = () => (
  <Layout pageLink="blog" pageSlug="/blog">
    <SEO title="Home" />
    <PageWrapper>
      <PageInfo>
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
      </PageInfo>
      <a class="twitter-timeline" href="https://twitter.com/rodjohncomedy?ref_src=twsrc%5Etfw">Tweets by rodjohncomedy</a>
      <MapsWrapper>
        <HeadingStyleLight>My tour locations</HeadingStyleLight>
        <SubHeadingStyleLight>I know your interested in coming to a show, here are 3 locations that are locked in. More are coming.</SubHeadingStyleLight>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1XNk67XMAdzG2vbEjZjmuII7VD2vwiUCJ"
        title="TourLocations"
        width="640" 
        height="480"></iframe>
      </MapsWrapper>
    </PageWrapper>
  </Layout>
)

export default IndexPage
