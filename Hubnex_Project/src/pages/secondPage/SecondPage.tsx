
import SecondPageTheory from "../../components/secondPageTheory/SecondPageTheory"
import { TestimonialSection } from "../../components/slack/TestimonialSection"
import { FooterBanner } from "../../components/slack/FooterBanner"



export default function SecondPage() {
  return (
    <div>

      {/* Code by Mahipal */}
      <SecondPageTheory></SecondPageTheory>
      <hr className="my-8"/>

      {/* Code by Mahipal */}
      <TestimonialSection
          title="Driving results for leaders across the globe"
          quote="People now recognise that having a good performance conversation means that something happens as a result."
          description="With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals from which we approach managers and check to see what is happening."
          logoUrl="https://s3-alpha-sig.figma.com/img/25ee/3d5c/47d005ad07e2df226b2194fdd9954c95?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AOH6WNSUxmYmSAkCH9qa6riURGVXdE8V26FIsVHXjiZC3kAANrVkT78Kg3xLfzeQc0SuDvf-nsNLDU880LH2N2mIvA~~N8eix95ZjFlYLs5J2xnJqASHL6~o4hoSrWBRw-NFNxmcdinYkPX7bNaRxBVkuaBcAEylSuEPQaiJvisnnWHly--EX~XH0A42gzUEKRuFsiE6oaY6CKK62rHrUf-21jAb2KUrn3rWlVq69sPr4lEfMBgLUhdVhef~2dusqFB0L8Jbd3Mu-ljlM2MsbhSo~iJ8V5Z-9RCopiRK4GP2qfSwGmjwsIJoB6AUihGUlm1aksdu0WeacY3pqw56Jg__" 
          companyName="Slack"
          companyType="Product Company"
        />

           <hr className="my-8"/> 

          {/* Code by Mahipal */}
           <FooterBanner 
          message="Get Evaluate Your Business Score for Free!"
          buttonText="Check Now!" 
        />
      </div>
  )
}
