import React from "react"
import styled from "styled-components"
import { TiSocialYoutubeCircular, TiSocialTwitterCircular, TiSocialFacebookCircular } from 'react-icons/ti'

const FooterWrapper = styled.div`
    padding: ${props => props.theme.textSpace} 0;
    background: ${props => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: #fff;

        svg {
            font-size: 5rem;
        }
    }
`

const Footer = () => (
    <FooterWrapper>
        <a href="https://www.facebook.com/rodjohncomedy/" rel="noopener noreferrer" target="_blank">
            <TiSocialFacebookCircular />
        </a>
        <a href="https://twitter.com/rodjohncomedy" rel="noopener noreferrer" target="_blank">
            <TiSocialTwitterCircular />
        </a>
        <a href="https://www.youtube.com/channel/UCeKCawv6ASJncx-tRxdFfgA?disable_polymer=true" rel="noopener noreferrer" target="_blank">
            <TiSocialYoutubeCircular />
        </a>
    </FooterWrapper>
)

export default Footer
