/* eslint-disable react/jsx-key */
import { Container, Desc, TimelineSection, Title, Wrapper } from "./ExperienceCss";
import { experiences } from '../../myData/Data';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import ExperienceCard from "../Cards/ExperienceCard";






const Experience = () => {
    return (
        <Container id='experience'>
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    I have work experience as a front-end and some project work.
                </Desc>
                <TimelineSection>
                    <Timeline >
                        {
                          
                            experiences.map((experience,index) => (
                             <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary"/>
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#00ff22' }} />}
                                    
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <ExperienceCard experience={experience}/>
                                </TimelineContent>
                             </TimelineItem>
                            
                            ))
                        
                        }

                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Experience;