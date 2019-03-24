import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Nav from "./nav";

const HeaderWrapper = styled.header`
  padding: ${props => props.theme.textSpace};
  background: linear-gradient(to right bottom,
                ${props => props.theme.secondaryLight},
                ${props => props.theme.secondary});
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 5rem;
    font-weight: 300;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.8rem;

    span {
      display: block;
      font-size: 2.5rem;
      font-weight: 600;
    }
  }
`

const Header = ({pageLink, pageSlug}) => (
  <HeaderWrapper>
    <h1>
      Rodney Johnson
      <span>Storyteller - Comedian</span>
    </h1>
    <Nav pageLink={pageLink} pageSlug={pageSlug} />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
