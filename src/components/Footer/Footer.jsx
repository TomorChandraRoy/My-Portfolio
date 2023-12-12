
import { Copyright, FooterContainer, FooterWrapper, Logo,  Nav,  NavLink,  SocialMediaIcon, SocialMediaIcons } from "./FooterCss";
import { Bio } from "../../myData/Data";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterWrapper>
                    <Logo>Tomor Chandra Roy</Logo>
                    <Nav>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#education">Education</NavLink>
                    </Nav>
                    <SocialMediaIcons>
                        <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                        <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
                        <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                        <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
                    </SocialMediaIcons>
                    <Copyright>
                        &copy; 2023 Tomor Chandra Roy. All rights reserved.
                    </Copyright>

                </FooterWrapper>
            </FooterContainer>
        </div>
    );
};

export default Footer;
