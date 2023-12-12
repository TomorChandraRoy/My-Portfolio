import { useRef, useState } from "react";
import { ContactButton, ContactForm, ContactInput, ContactInputMessage, ContactTitle, Container, Desc, Title, Wrapper,  } from "./ContactCss";
import {  Snackbar } from "@mui/material";
import  emailjs  from '@emailjs/browser';



const Contact = () => {
    //hooks
    const [open, setOpen] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pcrlwtc', 'template_x8zjka9', form.current, 'LKB16gpHqp-R8PHkd')
            .then((result) => {
                setOpen(true);
                 console.log(result.test);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Email Me ❤️</ContactTitle>
                    <ContactInput placeholder="Your Email" type="email" name="from_email" />
                    <ContactInput placeholder="Your Name" type="text" name="from_name" />
                    <ContactInput placeholder="Subject" name="subject" />
                    <ContactInputMessage placeholder="Message" rows="4" name="message" />
                    <ContactButton type="submit" value="Send"> 
                         
                    </ContactButton>
                    
                </ContactForm>
                <Snackbar 
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Email sent successfully!"
                    severity="success"
                />
            </Wrapper>
        </Container>
    );
};

export default Contact;