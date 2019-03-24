import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby";

const NavList = styled.ul`
    list-style: none;
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8rem;

    li {
        padding: 0.5rem 1rem;
        border: 2px solid #fff;
        border-radius: 3px;
        transition: all ease 0.3s;
        :hover {
            background: #fff;

            a {
                color: ${props => props.theme.secondary};
            }
        }
    }
`

const NavLink = styled(Link)`
    margin-left: 0.8rem;
    color: #fff;
    transition: all ease 0.3s;
`

const Nav = ({pageLink, pageSlug}) => (
  <nav>
    <NavList>
        <li><NavLink to={pageSlug}>{pageLink}</NavLink></li>
    </NavList>
  </nav>
)

export default Nav
