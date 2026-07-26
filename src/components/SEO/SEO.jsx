import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content="Industrial Automation, PLC Programming, SCADA, HMI, Control Panel, SPM Machine Design, Mech Volt Technologies"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />
    </Helmet>
  );
};

export default SEO;