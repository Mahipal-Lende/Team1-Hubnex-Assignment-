
import { HeroContent } from "../../components/heroSection/HeroContent"
import { HeroImage } from "../../components/heroSection/HeroImage"
import Banner from "../../components/banner/Banner"
import { TestimonialSection } from "../../components/slack/TestimonialSection"
import { FooterBanner } from "../../components/slack/FooterBanner"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Hero2 from "../../components/Basic_Component_lib/Hero2"
import Glob from "../../components/global/Glob"
import HeroBox from "../../components/HeroBox/HeroBox"
import HeroBlog from "../../components/caseStudy/HeroBlog"

function ThirdPage() {
  return (
    <>

    <Header></Header>
    <div className="bg-gray-50 max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
        <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">

        <HeroContent url={"https://s3-alpha-sig.figma.com/img/be12/fc48/f65e8b4594f3089cce96c2bdbd9c1450?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Co12YADKxn65unCgxgy-X2wxueKljhjHhMJKZlcYcSRsyZdWPpDXsGIVIJdRTwpIIWFeMRrpBuqwo9NmoI7zzuT7iufuJelsoxJpo4pI0Oif8CfD~YL-M8C9GN6KC0~HYTWx6cmKjswEY8pI5ht236KsH7rTsN1~KpoDg3G1IG2fLuVbIDbfeI2X1YJ91ipB~fi848IzuCD3khH5KFuwGHGwwz-ZLDaotiVqFjE~ab4wdvvntQ0Z1FWldEmD2PCR5DAUElZ-rg45~BlJEEsyR0Rr9VLBWfknDxYp-fnXIAKWLL5r24D99YDb-3hK5OIIVn~wObg6MtGKSMColafddg__"} title={"Join Your Partner Network"} description={"Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your."} />


        <HeroImage imageUrl="https://st.depositphotos.com/1594308/2118/i/450/depositphotos_21186915-stock-photo-business-partners-discussing-documents.jpg" />
      </div>
        </div>
        <Banner></Banner>
        <hr className="my-5 bg-slate-950"/>
        <TestimonialSection           
        title="Driving results for leaders across the globe" 
        quote="People now recognise that having a good performance conversation means that something happens as a result." 
        description="With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals from which we approach managers and check to see what is happening." 
        logoUrl="https://s3-alpha-sig.figma.com/img/25ee/3d5c/47d005ad07e2df226b2194fdd9954c95?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AOH6WNSUxmYmSAkCH9qa6riURGVXdE8V26FIsVHXjiZC3kAANrVkT78Kg3xLfzeQc0SuDvf-nsNLDU880LH2N2mIvA~~N8eix95ZjFlYLs5J2xnJqASHL6~o4hoSrWBRw-NFNxmcdinYkPX7bNaRxBVkuaBcAEylSuEPQaiJvisnnWHly--EX~XH0A42gzUEKRuFsiE6oaY6CKK62rHrUf-21jAb2KUrn3rWlVq69sPr4lEfMBgLUhdVhef~2dusqFB0L8Jbd3Mu-ljlM2MsbhSo~iJ8V5Z-9RCopiRK4GP2qfSwGmjwsIJoB6AUihGUlm1aksdu0WeacY3pqw56Jg__"  
        companyName="Slack"  
        companyType="Product Company"
        />
        <hr className="my-5 bg-slate-950"/>
        <FooterBanner 
          message="Get Evaluate Your Business Score for Free!"
          buttonText="Check Now!" 
        />
        
    </div>
    <Hero2/>
        <Glob/>
        <HeroBox/>
        <HeroBlog/>
    <Footer></Footer>
    </>


  )
}

export default ThirdPage



// https://s3-alpha-sig.figma.com/img/5ea7/b63c/28692956449261599ea68bcf7cb8122b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iz4b7ARxoMIzgFUQm90b6HA1NRSbE3~mgZ0QmA0XVHd4sv1GWHV00vj-QFBuJFRKXBTXmwX8CXjpJJF1q2~7EnwU1wk5QVkfvF~1ypH1PfadHngKRVeiyyBDu1XGmoiZr7X2k4SVtdKB38UIwYU7eqIgdxr9V1XOxmwBmhVFfWLeeKA82KyV~ZYuYmUYn5VbvrQEZ5fMSOaxR7Hf8LVf-IHFhVT~LQZ0x7VfJ5Xx9RDOOinN9DLbHMi4Zbqh0kIwS49RDr~3uaRTtbTFTRj303H7Km9R9aearpSq5TdHyFyzLbMIP4GIIcr~DG~sfQ9JRcrahmm5oEuwrTZ~w3Sz6w__