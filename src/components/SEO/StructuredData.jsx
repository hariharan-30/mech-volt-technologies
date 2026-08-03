import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.mechvolttechnologies.com/#organization",
        name: "Mech Volt Technologies",
        url: "https://www.mechvolttechnologies.com",
        logo: "https://www.mechvolttechnologies.com/Engineering.png",
        image: "https://www.mechvolttechnologies.com/Engineering.png",
        description:
          "Mech Volt Technologies specializes in Industrial Automation, PLC Programming, HMI, SCADA, Robotics Integration, SPM Machine Design and Control Panel Manufacturing.",
        email: "mechvolttechnologies2024@gmail.com",
        telephone: "+918056257501",
        sameAs: [
          "https://www.linkedin.com/",
          "https://www.facebook.com/",
          "https://www.instagram.com/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.mechvolttechnologies.com/#website",
        url: "https://www.mechvolttechnologies.com",
        name: "Mech Volt Technologies",
        publisher: {
          "@id": "https://www.mechvolttechnologies.com/#organization",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.mechvolttechnologies.com/#localbusiness",
        name: "Mech Volt Technologies",
        url: "https://www.mechvolttechnologies.com",
        image: "https://www.mechvolttechnologies.com/Engineering.png",
        telephone: "+918056257501",
        email: "mechvolttechnologies2024@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default StructuredData;
