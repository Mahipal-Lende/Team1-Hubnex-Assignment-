import TextCard from "../Basic_Components/TextCard";
import CybersecurityPercent from "./CybersecurityPercent";
import ImpactCard from "./ImpactCard";
import TheorySection from "./TheorySection";

const SecondPageTheory = () =>{

    const url : string = "https://s3-alpha-sig.figma.com/img/2f85/5aa4/b7a5f36ac550e72c25eb3a4015e8a764?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SmoxdtvTDF3u9Z07osYFYbUq0jb1GvItR~VE4dgjdX02a~WtfwiU3~m-NyqeWTwhxlIUGW73wfc8~tCAI9SOYefCjjPmSuhmR-OEvWVFDaASxlBcb9AnGmsNg~FjCIHdTMJPe78emk-r5H0vd9uuY0lrhuimvMqXyA2B48UjcRBejEfQ~GYhzPu0VRhELhT3rIqc4hqW8QZlGtVL9FfwGU14-ozLf6aBTjmiJyRyktM-usQPaTjZ3KlKyVgP3W6rJ5rK7L3l3BxJKiz6YYH9yi9PTU7MiGs8spy2ycTd-JInUR6nezuMRoTZYmDLkF1cQ~xTEKaqnNiGhiTIaI5AbQ__";

return(
    <>
    <div className="bg-gray-50">

    {/* <!-- Container --> */}
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">

{/* <!-- Header Section with Image on the Right --> */}
<section className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">

  {/* <!-- Text Content --> */}
  <div className="lg:w-3/5 space-y-4">
    <h1 className="text-5xl font-bold text-gray-900">How cybersecurity solutions helped an insurance company</h1>
    <p className="text-gray-600 text-lg">
    Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.landing page or admin panel for your SaaS.landing page.
    </p>
    <div className="flex space-x-8 mt-10">
      <CybersecurityPercent percent={"78.6%"} caption={"Better Data Protection"} midhead={"Software"} midsubhead={"Industry"}/>

      <CybersecurityPercent percent={"50.6%"} caption={"Improvement in Regulatory Compliance"} midhead={"Cybersecurity Solutions"} midsubhead={"Service Provided"}/>

      <CybersecurityPercent percent={"25.6%"} caption={"Phishing Mitigation"} midhead={"200-500"} midsubhead={"Company Size"}/>
      
    </div>
  </div>

  {/* <!-- Image Content --> */}
  <div className="lg:w-2/5 flex justify-center lg:justify-end">
    <img src={url} alt="Cybersecurity Illustration" className="w-full h-auto rounded-lg shadow-md"/>
  </div>
</section>

{/* <!-- Business Challenge Section --> */}
<section className="space-y-4">
  <TheorySection heading={"Business Challenge"} 
  paragraph={"One major problem they identified was the heightened risks of data breaches and unauthorized access to sensitive customer information,including personal and financial data. This was further exacerbated by the possibilities of increasingly sophisticated phishing and social engineering attacks targeting employees and customers, posing risks of credential theft and fraud... "}/>
</section>

{/* <!-- Solution Steps Section --> */}
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <TextCard serialNo={1} 
      title={"Endpoint Security"} 
      description={"Our team deployed advanced endpoint protection solutions to safeguard desktops, laptops, and mobile devices from malware, ransomware, and other cyber threats."} ></TextCard>

      <TextCard serialNo={2} 
      title={"Network Security"} 
      description={"We implemented robust network security measures, including firewall, intrusion detection systems, and secure VPN connections, to protect against unauthorized access."}>
      </TextCard>
      <TextCard serialNo={3} 
      title={"Security Awareness Training"} 
      description={"We provided comprehensive security awareness training programs for employees, focusing on cybersecurity best practices and incident response protocols lorem ipsum."}>
      </TextCard>
      <TextCard serialNo={4} title={"Incident Response and Forensics"} description={"Our data experts took care of incident response and forensics capabilities to detect, respond to, and recover from cybersecurity incidents effectively."}></TextCard>
  </div>
</section>

{/* <!-- Impact Section --> */}
<h2 className="text-4xl font-bold text-gray-900">Impact</h2>
<p className="text-lg">We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.</p>
<section className="space-y-2">

    <ImpactCard title={"Enhanced Patient Engagement:"}
            paragraph={"We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles."} value={60}>
    </ImpactCard>
    <ImpactCard title={"Improved Treatment Adherence:"}
            paragraph={"Positive feedback from healthcare providers regarding improved patient adherence to treatment plans and therapy sessions was facilitated through the mobile application, resulting in more effective therapy outcomes."} value={39}>
    </ImpactCard>
    <ImpactCard title={"Performance Scalability:"}
            paragraph={"Seamless scalability and optimal performance of the mobile application, even during periods of peak user activity helped us ensure uninterrupted service availability and user satisfaction."} value={53}>
    </ImpactCard>
  

</section>


{/* <!-- Conclusion Section --> */}
<section className="space-y-4">

  <TheorySection heading={"Conclusion"} 
  paragraph={"We continue to deliver robust cybersecurity solutions to their team to mitigate cyber risks and enhance cyber resilience in the insurance industry. We hope leveraging our cybersecurity solution helps the client stand true to their commitment to their customers on delivering a secure and resilient digital future with them."}/>
</section>

</div>

    </div>
    </>
)

}

export default SecondPageTheory;


{/* <section className="space-y-4"> */}
  
  {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="text-center space-y-2">
      <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-blue-500 h-10 w-10">
          <AnimatedCircularProgressBar max={100} value={60} min={0} gaugePrimaryColor={"blue"} gaugeSecondaryColor={"white"}/>
          60%
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Enhanced Patient Engagement</h3>
      <p className="text-gray-600">We were successful in the development and deployment of the app before the planned timeline...</p>
    </div> */}
    {/* <div className="text-center space-y-2">
      <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-blue-500">39%</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Improved Treatment Adherence</h3>
      <p className="text-gray-600">Positive feedback from healthcare providers regarding improved patient adherence to treatment plans...</p>
    </div> */}
    {/* <div className="text-center space-y-2">
      <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-blue-500">53%</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Performance Scalability</h3>
      <p className="text-gray-600">Seamless scalability and optimal performance of the mobile application, even during periods of peak user activity.</p>
    </div> */}
  {/* </div> */}
{/* </section> */}