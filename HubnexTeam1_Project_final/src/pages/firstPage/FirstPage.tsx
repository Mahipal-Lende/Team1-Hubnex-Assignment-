
import HeroSection from "../../components/heroSection/HeroSection";
import Hubnex from "../../components/slack/Hubnex";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hero2 from "../../components/Basic_Component_lib/Hero2";
import Glob from "../../components/global/Glob";
import HeroContent from "../../components/caseStudy/HeroContent";
import HeroBlog from "../../components/caseStudy/HeroBlog";


const FirstPage = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection url={"https://s3-alpha-sig.figma.com/img/be12/fc48/f65e8b4594f3089cce96c2bdbd9c1450?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Co12YADKxn65unCgxgy-X2wxueKljhjHhMJKZlcYcSRsyZdWPpDXsGIVIJdRTwpIIWFeMRrpBuqwo9NmoI7zzuT7iufuJelsoxJpo4pI0Oif8CfD~YL-M8C9GN6KC0~HYTWx6cmKjswEY8pI5ht236KsH7rTsN1~KpoDg3G1IG2fLuVbIDbfeI2X1YJ91ipB~fi848IzuCD3khH5KFuwGHGwwz-ZLDaotiVqFjE~ab4wdvvntQ0Z1FWldEmD2PCR5DAUElZ-rg45~BlJEEsyR0Rr9VLBWfknDxYp-fnXIAKWLL5r24D99YDb-3hK5OIIVn~wObg6MtGKSMColafddg__"} 
      
      imageUrl={"https://s3-alpha-sig.figma.com/img/3459/1306/8b659eea92f8fac3c8bacae4f562ea37?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kkvec4ftg0VxYNn~8ogHwVGWMkRgbX9~VXWriWUCOPTWRilykvXV8Ms0FMIGUUWQPdv7rxhAPhsaSmmjVpg2ocafh5Wb6OdD4jqeMDUT6kxk5pah8ELHvVLZC1hSb0laF89EljJLR3TZYQLuMVV2SZSp0LG~giGGB7DoX-tc~vq~6Yq-Z6QwgVXZkuLAsMEMVbw37~0wQ~QkJNfWJkN2IVhgtJxBoT20LCKQlR7Wnlvp8cyLcVhoxWyTGpkrj9eNqoAMDwg41CXocChy5fBnUHJS667VcHq2QXa98defcYDns5mFH54hLr-5f~g8hsGws4SP2fylY5QG2gzxhIY1UQ__"}/>  
      <hr className="my-10"/>
      <Hero2/>
      <Glob/>
      <HeroContent/>
      <Hubnex></Hubnex>
      <HeroBlog/>
      <Footer></Footer>
      
    </div>
  )
}

export default FirstPage;