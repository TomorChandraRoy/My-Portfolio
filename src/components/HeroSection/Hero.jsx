import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer,  HeroRightContainer,  Img,  ResumeButton, Span, SubTitle, TextLoop, Title,  } from "./HeroCss";
import { Bio } from "../../myData/Data";
import Typewriter from 'typewriter-effect';
import Myimg from '../../image/IMG.jpg';
import HeroBgAnimation from "../HeroBgAnimation";




const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                <HeroBgAnimation/>
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am <br/> {Bio.name} </Title>
                        <TextLoop>
                            I am a
                            <Span>
                            <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                                <ResumeButton
                                className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#4441f0] text-[20px] font-semibold" : ""
                              }
                            >
                            <a href="/public/resume.pdf" download={"resume.pdf"}>Check Resume </a>
                                
                                     
                                </ResumeButton>
                                {/* <ResumeButton href={Bio.resume} target='_blank'>Check Resume</ResumeButton> */}
                    </HeroLeftContainer>
                    <HeroRightContainer><Img src={Myimg} alt="hero-image" /></HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default Hero;