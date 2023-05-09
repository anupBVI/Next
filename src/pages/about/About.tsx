
import Button from '@/components/Button/Button'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import React from 'react'
import { FiArrowRight } from "react-icons/fi";


const About = () => {
  return (
    <MainLayout noFooter={true}>
      About page
      <br /><br />

      <Button lIcon={<FiArrowRight/>} primary rounded label='Click me'  />
      { " "}
      <Button rIcon={<FiArrowRight/>} secondary curved label='Click me'  />
      { " "}
      <Button lIcon={<FiArrowRight/>} tertiary rounded label='Click me'  />
      { " "}
      <Button lIcon={<FiArrowRight/>} danger rounded label='Click me'  />
      { " "}



    </MainLayout>
  )
}

export default About
