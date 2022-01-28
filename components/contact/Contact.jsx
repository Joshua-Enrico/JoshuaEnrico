import React from 'react';
import { ContactCard, ContactCardData, ContactCardref, ContactCardTitle, ContactComponent, ContactContainer, ContactContent, ContactContTitle, ContactForm, ContactInfo, ContactInput, ContactLabel, ContactSubtitle, ContactTitle, ContctFormDiv, FormButton, TextArea } from './Style';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';



const Contact = () => {
  return (
  <ContactComponent id="contact">
      <ContactSubtitle>Get in Touch</ContactSubtitle>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactContainer>
          <ContactContent>
                <ContactContTitle>Talk To Me</ContactContTitle>
                <ContactInfo>
                    <ContactCard>
                        <AiOutlineMail/>
                        <ContactCardTitle>Email</ContactCardTitle>
                        <ContactCardData>joshuaenrico123@gmail.com</ContactCardData>
                        <ContactCardref href="mailto:joshuaenrico123@gmail.com" target="_blank">
                            Write Me
                            <BsArrowRightShort/>
                        </ContactCardref>
                    </ContactCard>
                    <ContactCard>
                        <AiOutlineWhatsApp/>
                        <ContactCardTitle>Whatsapp</ContactCardTitle>
                        <ContactCardData>99999999</ContactCardData>
                        <ContactCardref href="https://api.whatsapp.com/send?phone=51981194247&text=hi, more information!" target="_blank">
                            Write Me
                            <BsArrowRightShort/>
                        </ContactCardref>
                    </ContactCard>
                    <ContactCard>
                        <RiMessengerLine/>
                        <ContactCardTitle>Messenger</ContactCardTitle>
                        <ContactCardData>Joshua Claudio Enrico</ContactCardData>
                        <ContactCardref href="https://m.me/joshua.claudioenrico.184" target="_blank">
                            Write Me
                            <BsArrowRightShort/>
                        </ContactCardref>
                    </ContactCard>
                </ContactInfo>
          </ContactContent>
          <ContactContent>
          <ContactContTitle>Write Me Your Project</ContactContTitle>
                <ContactForm>
                    <ContctFormDiv>
                        <ContactLabel>Name</ContactLabel>
                        <ContactInput type="text" placeholder='your name'/>
                    </ContctFormDiv>
                    <ContctFormDiv>
                        <ContactLabel>Mail</ContactLabel>
                        <ContactInput type="email" placeholder='your email'/>
                    </ContctFormDiv>
                    <ContctFormDiv className='text-input'>
                        <ContactLabel>Message</ContactLabel>
                        <TextArea name="" id="" cols="30" rows="10" placeholder='write your message' ></TextArea>
                    </ContctFormDiv>
                    <FormButton>Send</FormButton>
                </ContactForm>
          </ContactContent>
      </ContactContainer>
  </ContactComponent>
  );
};

export default Contact;
