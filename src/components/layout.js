import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './header'
import { device } from './styles/MediaQueries'
import BGImage from '../images/comedian-stage.jpg'
import Footer from './footer';

const theme = {
  primary: '#262626',
  primaryLight: '#3D3D3D',
  secondary: '#C50012',
  secondaryLight: '#FA0000',
  black: '#004040',
  grey: '#333',
  lightGrey: '#DDD',
  lightestGrey: '#EEE',
  maxWidth: '62%',
  bs: '0 10px 18px 1px rgba(0, 0, 0, 0.2)',
  bsHover: '0 5px 10px 1px rgba(0, 0, 0, 0.3)',
  ts: '0px 3px 8px rgba(0,0,0,0.3)',
  sectionSpace: '10rem',
  textSpace: '4rem',
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    src: url('https://fonts.googleapis.com/css?family=Raleway:300,400,600');
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media ${device.laptop} {
      font-size: 56.25%;
    }
    @media ${device.mobileL} {
      font-size: 50%;
    }
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.7;
    font-family: Raleway, sans-serif;
  }
  a {
    font-family: Raleway, sans-serif;
    text-decoration: none;
  }
  button {  font-family: Raleway, sans-serif; }
  ::selection {
    color: #fff;
    background: ${props => props.theme.secondaryLight};
  }
`

const MainWrapper = styled.main`
  padding: ${props => props.theme.sectionSpace} 0;
  background-image: linear-gradient(
      to right bottom,
      rgba(61, 61, 61, 0.9),
      rgba(38, 38, 38, 0.9)
    ),
    url(${BGImage});
    background-position: center;
    background-size: cover;
`

const Layout = ({ children, pageLink, pageSlug }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header pageLink={pageLink} pageSlug={pageSlug} />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
