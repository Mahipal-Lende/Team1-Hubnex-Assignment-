import React from "react";
import "./Locations.css";
import LocationDetails from "./LocationDetails";
import LocationImage from "./LocationImage";

type LocationCardProps = {
  flag: string;
  name: string;
  comingSoon?: boolean;
};

const LocationCard: React.FC<LocationCardProps> = ({ flag, name, comingSoon }) => (
  <div className={`location-card ${comingSoon ? "coming-soon" : ""}`}>
    {comingSoon && <span>COMING SOON!</span>}
    <img src={flag} alt={name} />
    <h3>{name}</h3>
  </div>
);

const Locations: React.FC = () => {
  return (
    <div className="h-full w-full p-40">
      <h1 className="text-3xl font-bold">Our Locations</h1>
    <div className="w-full flex">
      <div className="locations flex flex-col">
      <div className="flex flex-row mr-24">
      <LocationCard flag="https://s3-alpha-sig.figma.com/img/90bd/e73f/4b4cd6e86b451be581d048fe1d92a62b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sgc7fnFjM58RrXEbmqkmHUYzJkmpNKiTBGV7yhhtc0H4RLBvXYLZ9bZvemo74D73xmqQd3YjGPH1Lv-6X33ZWb8a7VBT~~CNhMx6rL5i91ECwGE1mTDBbEB7qn6QkdPqpGio2bJB2SKSRUEvYm2pExCP8b7WzsnJCnlws7d2yRlQn1zf5s1Omf1OlmBLHKPnTwRM5C-Scq1afj~ZzmgidtJRbQ-AXXe~DReXuwVKZ4ScCNZ-k3uyInEkHSlu3LXA~YHhwa1Rr~LTOry7VOGKL4XqQyuhBt-JmAn3XTw17BvIBcxxJJiCt41PHlqe7O38yzieuh18JzPjQLeLBFvV0Q__" name="INDIA" />
      <LocationCard flag="https://s3-alpha-sig.figma.com/img/178d/d729/3cb176038e0aec58506a4eb9af3b1ca5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Itze9mTZDBFHkpjWtYwgTX6WHfmRh3vCjSChDUarkzjojfHy4z8NZ90uUXrAPLLfY6ZHlU8bsKdAZzEunVlp1qhHPmQj3TrIzNrlinzYbSBhR~Qw~YSnpIgeEX-ytYn3pHsQvt4u6pbv-DHsd9TVmYrvZpfzgZfZzH8zi2uRJovvaiN1xury~Fs4FoZ22jLSL65B~-ttAw9Z-jlJjfS0~0pWz7miJIl6FQaUuixR0DoejOBQykRa2D3L-Cas1hZPueEJbiIuXYwAYFJ3cmTT2CVP16xEfNTapPsumBlZes~HbDXno6xxG3PXxnQjWHjWfdX-Dd~JyL8T4PIfFkTnNg__" name="UAE" comingSoon />
      <LocationCard flag="https://s3-alpha-sig.figma.com/img/1b76/47db/c13476965b507d867d1230b9495ad6f9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N5rQUZoW96ol~-UMgoubuNnxLMeLHOm5nL7T4N48NGbqcpOmNeeYgKA0mOZJ~sCaFIgw99lsG79D~Tjxvgg1zMqs8j2bbL9NCIODtuUmBosxhxtedwqSVtWoc8oF5UTliIjMeTPSgcpJCCjx~lZKloEdRd31kmu8cTHbcI~fEQq8TLNVlRqeTl8Qfl~n88tsQY6sv9OUkP9QnwPPgTVc2mmLey1LPpgUFcNUkJulYm6sJ-e9WGKBUbcTisOnlQXxYMB6u-mWHTnw7qyb9QFOOb6xI39LWZvXXREhapN-O6dqx6cOeqxX-12SWpENWYycT2L~vgGHGPUsXoXcObWK2w__" name="USA" comingSoon />
      <LocationCard flag="https://s3-alpha-sig.figma.com/img/8a02/8ee0/28ab624c84dae2a0dd76b9487cba22f4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4-C65-FMDcFPWOTw6qL7sw1uzlAvJlXYyvmKfoLfFxHXgrCOQ-AhTzbpBbF-gATmZKsc4SEJiy12g258RaXQY9I3g2vr7Dz3Mjq5wPKiGOU1mbr0F9FHi8435QXm~If8xTct3mSOt23Kll6Jbx81Q7uHE9RRsZh2Hyjvr2or-CWJL7sBMyAHUdBYnZSXCwz7u-vJcU6m5Z1cqN3bAbdM8FaYZhouSTUhdGeVRGJ1EHn0nx4wjaCEqB03fML6VQ1I8V5z~bD7PLsQLKa03BJ0Ou-VDpQ3Ts5P1~Y9671y5TCj0rWHSXdSOZ2xdzobVfhfxPVReJFwuUUSONG~fcv2A__" name="INDONESIA" comingSoon />
      </div>
      <LocationDetails/>
    </div>
    <div>
    <LocationImage/>
    </div>
    </div>
    </div>
    
    
    
  );
};

export default Locations;