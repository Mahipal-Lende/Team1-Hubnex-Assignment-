import React from "react";
import "./glob.css";



const Glob: React.FC = () => {
  return (
    <div className="container">
      {/* Left description */}
      <div className="space-y-4">
      <div className="description">
        <h1>Unleash the full power of data</h1>
        <p>
          We guide global businesses through the challenges of developing
          purposeful technology that addresses their needs and advances their
          growth. We have established offices in India, the UAE, and the USA.
        </p>
        <div className="stats">
          <div>
            <h2>40+</h2>
            <p>Integrations</p>
          </div>
          <div>
            <h2>600%</h2>
            <p>Return on investment</p>
          </div>
          <div>
            <h2>4k+</h2>
            <p>Global customers</p>
          </div>
        </div>
      </div>

       {/* Logos */}
       <div className="logos">
        <img src="https://s3-alpha-sig.figma.com/img/0aa9/ce3b/01c0ce12c8adefd1cd9257c4a4db4e45?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hvV5EQaTwGRqKfqF8ScUKHAO2nqw4QRkhHS9k~BlYGuFEhdV2nKt6XgyPNLs73mhXMJit7qKJ0gHPujqNp3ew33VmQI4Bor3v-6u2GdEiFKlIdbVt7C5Jaj2lzZXj7hEjUTyEI6mEaxM5BYF6cVa7IgpeESmtj4ADZKNwbZj0d9QfS99agin9wcY8QnaRSQdeTR6KxmtbmtiAjE7UAvwraLJaIsrLLe9qC3lH2zSGsDaWPZEM86v8yQ9aq7DPrzd7nUds2vHAxJZoEJo24R20S920MgjjzM~Lp2jDp15mqwgTCrJwirO2C6OZ1dnD6ux-j4mxEbGDoteZhoPcRtHrA__" alt="Dailyhunt" />
        <img src="https://s3-alpha-sig.figma.com/img/fef9/b59d/5cb074442ea9d6f9eb04f0b9b8b9c64e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aau7tWT42a0lyN5AR2-u5w7NJku~v3JcApdfoih6bzWBcEg0V2SkwPSi3BXMpB7Dkce4rn3jeQI3ElANfjPHAjJDbpv4CfN8wNhly32zeI1AqWb5MKvjZUr1MBwolJ9G1niA~jUp2T1p-QDA8Q617SZSSM0PyvjjhVlUuT-zIFeVU6wI6xXA1kMqiU9EE87BAK91hHZFYm4Un5rBnM1iGVEk~nlCB4Bjor5pMTE1OibVO1pXOTW31PuG4wssJhrIejvu7-TKAh19k7PnjNYLM~zF95mYhGOk8QwbERF-EEksEL00t2m~SxEaGw1m0ayRuFzx7s736QC1~WEG8xKrbA__" alt="TOI" />
        <img src="https://s3-alpha-sig.figma.com/img/4aff/752a/4c7593e86b1f31e5d7855dd1c8611aa9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q-HXUXVcelseisoiJFXtgSrZvpZ6KAONZx7UCdW-62MBo9iD8h6x4CLTLSriwuN1JW1H6bmFYdqOiSB9Ay~W~ynln7tAun2J9nrxLl3GG13G5SYZTsl3OBRU29WPhNNgUGXUsYPESmv8lsrMPctPKkAOkBfi3Wwe8GOLe5DGDsOW7LIkm32EVP9oWhD4NDIlC8CVCcVN1toGFEanuNpt1g-qs9YTbl0h2xBFkqAQ6Xfug0RP4LvB~VTXHsLIa0fcXnc3mzmN9reU2uss7RhninuZ2vTj5-Fy-3dCAicdqM1q3iQ9anI68-q-T3JM4PdTe~EPTnlPJXePlYSNud-qgA__" alt="Hindustan Times" />
      </div>
      </div>

      {/* Right globe image */}
      <div className="w-1/3 h-3/5">
      <div className="globe">
        
      </div>
      </div>

    </div>
  );
};

export default Glob;