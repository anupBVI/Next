
import Button from '@/components/Button/Button'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import React from 'react'
import { FiArrowRight } from "react-icons/fi";


const About = () => {
  return (
    <MainLayout noFooter={true}>
    
      

      <Button lIcon={<FiArrowRight/>} primary={true} rounded={true} label='Click me'  />
      { " "}
      <Button rIcon={<FiArrowRight/>} secondary={true} curved={true} label='Click me'  />
      { " "}
      <Button lIcon={<FiArrowRight/>} tertiary ={true} rounded ={true} label='Click me'  />
      { " "}
      <Button lIcon={<FiArrowRight/>} danger={true} rounded={true} label='Click me'  />
      { " "}



    </MainLayout>
  )
}

export default About
