import TextCard from "../Basic_Component_lib/TextCard";

const SecondPageTheory = () =>{

    const url : string = "https://s3-alpha-sig.figma.com/img/2f85/5aa4/b7a5f36ac550e72c25eb3a4015e8a764?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KkXOPUCNdotIXP7yqSIrup4wTBmf5zPSZG-2jF7dPgTBwBjrp5tC2Ltx7GT6l0UJZociU8lSXY41oSI0rim5yyQ2dF4g-vNokPQRbGo~7D8YO~LEpnwxlbRPWwGeZY~lRWLuK1mc5CxgZoFclcrQh5bbMnhUYjF32hB0S~9LEBE5XQ0iRCvql2c8RXkVlRmmPcWxL~DygaV5WnHMZscx4kJcVi~Kjh4OET5KoeR63KlntXkZ7potR7KdBMsc0agGY7z65HxocoOSsVqzu4Gcoq2hyP5thjoVHQU-gyvrkKkuFqKsNPIsTaDF22QTtXykqUX86lEdcxH5rLbMqq5XpQ__";

return(
    <>
    <div className="bg-gray-50">

    {/* <!-- Container --> */}
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">

{/* <!-- Header Section with Image on the Right --> */}
<section className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">

  {/* <!-- Text Content --> */}
  <div className="lg:w-1/2 space-y-4">
    <h1 className="text-3xl font-bold text-gray-900">How cybersecurity solutions helped an insurance company</h1>
    <p className="text-gray-600">
      Clarity gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS.
    </p>
    <div className="flex space-x-8 mt-4">
      <div className="text-center">
        <p className="text-2xl font-bold text-green-600">78.6%</p>
        <p className="text-gray-500">Better Data Protection</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-green-600">50.6%</p>
        <p className="text-gray-500">Improvement in Regulatory Compliance</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-green-600">25.6%</p>
        <p className="text-gray-500">Phishing Mitigation</p>
      </div>
    </div>
  </div>

  {/* <!-- Image Content --> */}
  <div className="lg:w-1/2 flex justify-center lg:justify-end">
    <img src={url} alt="Cybersecurity Illustration" className="w-full h-auto rounded-lg shadow-md"/>
  </div>
</section>

{/* <!-- Business Challenge Section --> */}
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-gray-900">Business Challenge</h2>
  <p className="text-gray-600">
    One major problem they identified was the heightened risks of data breaches and unauthorized access to sensitive customer
    information, including personal and financial data. This was further exacerbated by the possibilities of increasingly
    sophisticated phishing and social engineering attacks targeting employees and customers, posing risks of credential theft
    and fraud...
  </p>
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
      description={"We provided comprehensive security awareness training programs for employees, focusing on cybersecurity best practices and incident response protocols."}>
      </TextCard>
      <TextCard serialNo={4} title={"Incident Response and Forensics"} description={"Our data experts took care of incident response and forensics capabilities to detect, respond to, and recover from cybersecurity incidents effectively."}></TextCard>
  </div>
</section>

{/* <!-- Impact Section --> */}
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-gray-900">Impact</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="text-center space-y-2">
      <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-blue-500">60%</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Enhanced Patient Engagement</h3>
      <p className="text-gray-600">We were successful in the development and deployment of the app before the planned timeline...</p>
    </div>
    <div className="text-center space-y-2">
      <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-blue-500">39%</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Improved Treatment Adherence</h3>
      <p className="text-gray-600">Positive feedback from healthcare providers regarding improved patient adherence to treatment plans...</p>
    </div>
    <div className="text-center space-y-2">
      <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-blue-500">53%</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Performance Scalability</h3>
      <p className="text-gray-600">Seamless scalability and optimal performance of the mobile application, even during periods of peak user activity.</p>
    </div>
  </div>
</section>

{/* <!-- Conclusion Section --> */}
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
  <p className="text-gray-600">
  We continue to deliver robust cybersecurity solutions to their team to mitigate cyber risks and enhance cyber resilience in the insurance industry. We hope leveraging our cybersecurity solution helps the client stand true to their commitment to their customers on delivering a secure and resilient digital future with them.
  </p>
</section>

</div>

    </div>
    </>
)

}

export default SecondPageTheory;