import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeadingStyle, ParagraphStyle, SubHeadingStyle } from "../components/styles/TextStyles";

const BlogWrapper = styled.div`
    width: 65%;
    margin: ${props => props.theme.textSpace} auto;
    padding: ${props => props.theme.textSpace} 2rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 6px;

    p {
        margin-bottom: ${props => props.theme.textSpace};
    }
`

const Blog = () => (
  <Layout pageLink="home" pageSlug="/">
    <SEO title="Blog" />
    <BlogWrapper>
      <HeadingStyle>The world is f*cked</HeadingStyle>
      <ParagraphStyle>
          Our latest Netflix special is almost finished, <em>The World is F*cked</em>. It's hard, ha hard, to believe we've made it this far and I am extremely fortunate to be able to share it with you all. It's been a <strong>long</strong> time coming, I've listened to your terrible comments and believe you will all be <strong>blown</strong> away by the quality that went into creating it.
      </ParagraphStyle>
      <SubHeadingStyle>My deepest and darkest fantasies</SubHeadingStyle>
      <ParagraphStyle>This Netflix special is unlike the rest, most of it revolves around my fantasies as a human. I think you will all be able to relate to them on some level. To give you a hint, one of them has to do with a sponge and a toaster. I don't think you're ready.</ParagraphStyle>
      <SubHeadingStyle>Digging deep physically and mentally</SubHeadingStyle>
      <ParagraphStyle>How can I put this... I've drilled deep into my own head and found some disgusting things. Sharing them with you all was a pretty logical choice in my opinion.</ParagraphStyle>
      <ParagraphStyle>The special launches in a couple months, you will all be aware because I will be blasting you in the face with social media posts. It goes on Netflix on May 5th, just in time for you to come home and plop down on your couch still drunk from a day celebrating a holiday that doesn't even make sense for you to be celebrating.</ParagraphStyle>
    </BlogWrapper>
  </Layout>
)

export default Blog
