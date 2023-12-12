/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { CardContainer, Container, Desc, Divider, Title, ToggleButton, ToggleButtonGroup, Wrapper } from "./ProjectCss";
import { useState } from "react";
import { projects } from '../../myData/Data'
import ProjectCards from "../Cards/ProjectsCard";



const Projects = ({openModal,setOpenModal}) => {
  
    const [toggle, setToggle] = useState('all');
    return (
      <Container id="projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
          </Desc>
          <ToggleButtonGroup >
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider />
            {toggle === 'web app' ?
              <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
              :
              <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
            }
            <Divider />
            {toggle === 'android app' ?
              <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APPS</ToggleButton>
              :
              <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APPS</ToggleButton>
            }
            <Divider />
            {toggle === 'machine learning' ?
              <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
              :
              <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            }
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === 'all' && projects
              .map((project) => (
                <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project) => (
                <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    )
  }
  
  export default Projects

// const Project = ({ openModal, setOpenModal }) => {
//     console.log(openModal);
//     console.log(setOpenModal);
//     const [toggle, setToggle] = useState('all');
//     return (
//         <Container id="projects">
//             <Wrapper>
//                 <Title>Projects</Title>
//                 <Desc>
//                     I have worked on a wide range of projects. From web Design . Here are some of my projects.
//                 </Desc>
//                 <ToggleButtonGroup >
//                     {toggle === 'all' ?
//                         <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
//                         :
//                         <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
//                     }
//                     <Divider />
//                     {toggle === 'web app' ?
//                         <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
//                         :
//                         <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
//                     }
//                     <Divider />
//                     {toggle === 'android app' ?
//                         <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APPS</ToggleButton>
//                         :
//                         <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APPS</ToggleButton>
//                     }
//                     <Divider />
//                     {toggle === 'machine learning' ?
//                         <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
//                         :
//                         <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
//                     }
//                 </ToggleButtonGroup>
//                 <CardContainer>
//                     {toggle === 'all' && projects
//                         .map((project) => (
//                             <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal} />
//                         ))}
//                     {projects
//                         .filter((item) => item.category == toggle)
//                         .map((project) => (
//                             <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal} />
//                         ))}
//                 </CardContainer>
//             </Wrapper>
//         </Container>
//     );
// };

// export default Project;