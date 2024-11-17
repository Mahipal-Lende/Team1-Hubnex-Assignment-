
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { HeroContentWoImg } from '../../components/heroSection/HeroContentWoImg';

import Hubnex from '../../components/slack/Hubnex';
import React from 'react'

const FifthPage : React.FC = () => {
  return (
    <div>

      <Header/>
      <div className="bg-gray-50 max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
          <HeroContentWoImg 
            url={'https://s3-alpha-sig.figma.com/img/be12/fc48/f65e8b4594f3089cce96c2bdbd9c1450?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Co12YADKxn65unCgxgy-X2wxueKljhjHhMJKZlcYcSRsyZdWPpDXsGIVIJdRTwpIIWFeMRrpBuqwo9NmoI7zzuT7iufuJelsoxJpo4pI0Oif8CfD~YL-M8C9GN6KC0~HYTWx6cmKjswEY8pI5ht236KsH7rTsN1~KpoDg3G1IG2fLuVbIDbfeI2X1YJ91ipB~fi848IzuCD3khH5KFuwGHGwwz-ZLDaotiVqFjE~ab4wdvvntQ0Z1FWldEmD2PCR5DAUElZ-rg45~BlJEEsyR0Rr9VLBWfknDxYp-fnXIAKWLL5r24D99YDb-3hK5OIIVn~wObg6MtGKSMColafddg__'} 
            title={'We’re empowering businesses with the technology they need to lead change and innovate in a business landscape that waits for no one.'}/>
          <Hubnex/>
      </div>
      <Footer/>
    </div>
  )
}

export default FifthPage;
