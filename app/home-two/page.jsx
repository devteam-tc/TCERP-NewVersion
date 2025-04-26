"use client";

import About from "../../components/containers/home-two/About"
import BannerTwo from "../../components/containers/home-two/BannerTwo"
import BlogTwo from "../../components/containers/home-two/BlogTwo"
import CounterTwo from "../../components/containers/home-two/CounterTwo"
import CtaTwo from "../../components/containers/home-two/CtaTwo"
import MessagesTwo from "../../components/containers/home-two/MessagesTwo"
import Pricing from "../../components/containers/home-two/Pricing"
import ProjectsTwo from "../../components/containers/home-two/ProjectsTwo"
import ServicesTwo from "../../components/containers/home-two/ServicesTwo"
import TeamTwo from "../../components/containers/home-two/TeamTwo"
import WhoWeAre from "../../components/containers/home-two/WhoWeAre"
import TextSlider from "../../components/containers/home/TextSlider"
import CustomCursor from "../../components/layout/CustomCursor"
import FooterTwo from "../../components/layout/footer/FooterTwo"
import HeaderTwo from "../../components/layout/header/HeaderTwo"

const page = () => {
  return (
    <>
      <HeaderTwo/>
      <BannerTwo/>
      <About/>
      <ServicesTwo/>
      <WhoWeAre/>
      <CtaTwo/>
      <ProjectsTwo/>
      <TextSlider/>
      <TeamTwo/>
      <Pricing/>
      <CounterTwo/>
      <MessagesTwo/>
      <BlogTwo/>
      <FooterTwo/>
      <CustomCursor/>
    </>
  )
}

export default page