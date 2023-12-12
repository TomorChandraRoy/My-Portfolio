import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import NavBar from './components/NavBar/NavBar';
import Hero from './components/HeroSection/Hero';
import Skill from './components/Skills/Skill';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience/Experience';
import { darkTheme } from './mode/theme';
import Project from './components/Projects/Project';
import { useState } from 'react';
import ProjectsDetails from './components/ProjectsDetails/ProjectsDetails';
import Education from './components/Education/Education';
import Contact from './components/ContactSection/Contact';
import Footer from './components/Footer/Footer';



const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <NavBar></NavBar>
          <Body>
            <Hero></Hero>
            <Wrapper>
              <Skill></Skill>
              <Experience />

            </Wrapper>
            <Project openModal={openModal} setOpenModal={setOpenModal}></Project>

            <Wrapper>
              <Education />
                <Contact></Contact>
            </Wrapper>
            <Footer/>
            {
              openModal?.state ? <ProjectsDetails openModal={openModal} setOpenModal={setOpenModal} />
                : ""
            }
          </Body>
        </Router>

      </ThemeProvider>

    </>
  )
}

export default App
