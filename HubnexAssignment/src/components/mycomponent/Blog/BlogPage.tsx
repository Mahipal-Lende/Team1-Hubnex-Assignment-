import './BlogPage.css'

const BlogPage = () => {
  return (
    <div className="container3">
    <p className="text-gray-500 text-sm mb-2 pt-3 px-3">#Business</p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2  px-3">
            What is Delivery Management and Why Does It Matter?
          </h1>
          <p className="text-gray-500 text-sm mb-2 pb-2 px-3">July 19, 2024 | By Author Name</p>
      <img
        src="https://s3-alpha-sig.figma.com/img/86b1/4511/3bebaf6d5c2fb8f6067eb23b852f4691?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZJ~6P7ntHb85Wlhq0a~tZpg~YtmtbQAk2wehirPZ-EAGp4b-FWqxbQDEg8FEKrmWCIuApTuHouUHbOMQ2YRsczQvQfrnZaVTGjAXZHwH9Pk3U~-qxACZ~r3fYeRf-1a9P4JwjZk1b6W4umYzJ7KVa8AzAtzQT4fff0B5LwsoDDFiMtqSuP7RdGNyAP6vC~q41lFSm9qrEktA6S01Qt6HoUADvvihCkczjDTjBiBb6LpEhZ0V-gaJFjst~laY4S0YpBK~G1cUXOONMEAGHL8nHKCXN6~6W51N-m1oRvN7dee2eGqo1lLnfkU~NQLmqFOy9uPZ0XUUU2y46O722G9XSg__"
        alt="Header"
        className="w-full h-96 object-cover px-3"
      />

      <div className="flex flex-col md:flex-row px-4 md:px-8 mt-6 gap-6">

        <div className="md:w-2/3 w-full">
          <h2 className="text-2xl md:text-xl font-bold mb-2">Policy Details</h2>
          <p className=" text-lg text-gray-700 leading-relaxed mb-6">
            You shall also receive an alphanumerical/numerical identification number for
            tracking your grievances with the customer care. A grievance will be treated
            as closed if You communicate Your acceptance of the response received from
            the customer care team or where You fail to respond to the response received
            from the customer care team within 7 (Seven) days.
          </p>
          <h2 className="text-2xl md:text-xl font-bold mb-2">Governance Framework</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
          You shall also receive an alphanumerical/numerical identification number for tracking your grievances with the customer care. We assure You that ExMyB will make all reasonable endeavours to address the grievance made by You at the latest within 60 (Sixty) days from the date of receipt of the grievance.
          A grievance will be treated as closed if You communicate Your acceptance of the response received from the customer care team or where <span className='font-bold'> You fail to respond to the response received from the customer care team within 7 (Seven) days.</span></p>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
          A grievance will be treated as closed if You communicate Your acceptance of the response
          received from the customer care team or where You fail to respond to the response received from the customer care team within 7 (Seven) days.
          A grievance will be treated as closed if You communicate Your acceptance of the response received from the customer care team or where <span className='font-bold'>You fail to respond to the response received from the customer care team within 7 (Seven) days.</span>

          </p>
        </div>


        <div className="md:w-1/4 w-3/4 flex justify-end md:justify:items-center">
          <img
            src='https://www.figma.com/design/e3fsc96JGb19o6GesvHW1n/Arc-November-Assignment?node-id=1-898&t=rf9yzdt102jC2Whi-4'        alt=""
            className="w-3/4 h-[500px] object cover "
          />
        {/* src='https://www.figma.com/design/e3fsc96JGb19o6GesvHW1n/Arc-November-Assignment?node-id=1-898&t=rf9yzdt102jC2Whi-4' */}

        </div>
      </div>
    </div>
  );
};

export default BlogPage;
