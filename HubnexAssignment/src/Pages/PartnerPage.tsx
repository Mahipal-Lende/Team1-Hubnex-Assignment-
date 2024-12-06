import FooterBox from '@/components/mycomponent/Footer/FooterBox'
import FooterEnd from '@/components/mycomponent/Footer/FooterEnd'
import Header from '@/components/mycomponent/Header/Header'
import HeroThird from '@/components/mycomponent/HeroThird/HeroThird'
import PartnerGallery from '@/components/mycomponent/PartnerGallery/PartnerGallery'
import Glob from '@/components/mycomponent/Hero3/Glob'
import React from 'react'
import HeroBox from '@/components/mycomponent/HeroBox/HeroBox'
import { TestimonialSection } from '@/components/mycomponent/slack/TestimonialSection'
import HeroBlog from '@/components/mycomponent/caseStudy/HeroBlog'
import Locations from '@/components/mycomponent/location/Locations'
import { FooterBanner } from '@/components/mycomponent/slack/FooterBanner'
import PartnerPartnerPage from '@/components/mycomponent/PartnerPartnerComponent/PartnerPartnerComponent'


const PartnerPage:React.FC = () => {
  return (
    <div>
        <Header></Header>
      <HeroThird></HeroThird>
      <PartnerGallery></PartnerGallery>
      <Glob></Glob>
      <HeroBox></HeroBox>
      <PartnerPartnerPage></PartnerPartnerPage>
      <TestimonialSection
          title="Driving results for leaders across the globe"
          quote="People now recognise that having a good performance conversation means that something happens as a result."
          description="With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals from which we approach managers and check to see what is happening."
          logoUrl="https://s3-alpha-sig.figma.com/img/25ee/3d5c/47d005ad07e2df226b2194fdd9954c95?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AOH6WNSUxmYmSAkCH9qa6riURGVXdE8V26FIsVHXjiZC3kAANrVkT78Kg3xLfzeQc0SuDvf-nsNLDU880LH2N2mIvA~~N8eix95ZjFlYLs5J2xnJqASHL6~o4hoSrWBRw-NFNxmcdinYkPX7bNaRxBVkuaBcAEylSuEPQaiJvisnnWHly--EX~XH0A42gzUEKRuFsiE6oaY6CKK62rHrUf-21jAb2KUrn3rWlVq69sPr4lEfMBgLUhdVhef~2dusqFB0L8Jbd3Mu-ljlM2MsbhSo~iJ8V5Z-9RCopiRK4GP2qfSwGmjwsIJoB6AUihGUlm1aksdu0WeacY3pqw56Jg__" 
          companyName="Slack"
          companyType="Product Company"
        />
        <Locations></Locations>
        <FooterBanner 
          message="Get Evaluate Your Business Score for Free!"
          buttonText="Check Now!" 
        />
        <HeroBlog></HeroBlog>
      <FooterBox></FooterBox>
      <FooterEnd></FooterEnd>
    </div>
  )
}

export default PartnerPage
