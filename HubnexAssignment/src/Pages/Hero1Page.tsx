import HeroBlog from '@/components/mycomponent/caseStudy/HeroBlog'
import HeroCaseStudy from '@/components/mycomponent/caseStudy/HeroContent'
import FooterEnd from '@/components/mycomponent/Footer/FooterEnd'
// import Footer from '@/components/mycomponent/Footer/Footer'
// import FooterNew from '@/components/mycomponent/Footer/FooterNew'
import Header from '@/components/mycomponent/Header/Header'
import Glob from '@/components/mycomponent/Hero3/Glob'
import HeroFirst from '@/components/mycomponent/HeroFirst/HeroFirstNew'
// import HeroFirst from '@/components/mycomponent/HeroFirst/HeroFirst'
import HeroSecond from '@/components/mycomponent/HeroSecond/HeroSecond'
import Hubnex from '@/components/mycomponent/slack/Hubnex'
import FooterBox from '@/components/mycomponent/Footer/FooterBox'
import React from 'react'
// import BlogPage from '@/components/mycomponent/Blog/BlogPage'

const Hero:React.FC = () => {
  return (
    <div>
      <Header></Header>
    {/* <HeroFirst></HeroFirst> */}
    <HeroFirst></HeroFirst>
    <HeroSecond></HeroSecond>
    <Glob></Glob>
    {/* <Globe></Globe> */}
    <HeroCaseStudy></HeroCaseStudy>
    <Hubnex></Hubnex>
    <HeroBlog></HeroBlog>
    {/* <Footer></Footer> */}
    <FooterBox></FooterBox>
    <FooterEnd></FooterEnd>
    </div>
  )
}

export default Hero
