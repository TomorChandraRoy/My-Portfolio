/* eslint-disable react/jsx-key */
import { skills } from '../../myData/Data'

import { Container, Desc, SkillsContainer, Title, Wrapper,Skilled, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillCss';


const Skill = () => {
    return (
        <Container id='skills'>
            <Wrapper>
                <Title>Skills</Title>
                <Desc>
                    Here  are some of my skills on whice I have been working on for the past 6 months.And constantly working to keep myself updated.
                </Desc>
                <SkillsContainer>
                    {skills.map((item) => (
                        <Skilled>

                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {
                                    item.skills.map((skill) => (
                                        <SkillItem>
                                            <SkillImage src={skill.image}/>
                                            {skill.name}
                                        </SkillItem>
                                    ))
                                }
                            </SkillList>

                        </Skilled>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
};

export default Skill;