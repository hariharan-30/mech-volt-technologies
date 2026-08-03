// import { Helmet } from "react-helmet-async";

// const SEO = ({
//   title,
//   description,
//   keywords,
//   image = "/og-image.webp",
//   url = "https://mech-volt-technologies.vercel.app",
//   type = "website",
// }) => {
//   const siteName = "Mech Volt Technologies";

//   return (
//     <Helmet>
//       {/* Basic SEO */}

//       <title>{title}</title>

//       <meta name="description" content={description} />

//       <meta name="keywords" content={keywords} />

//       <meta name="author" content="Mech Volt Technologies" />

//       <meta name="robots" content="index, follow" />

//       <meta name="googlebot" content="index, follow, max-image-preview:large" />

//       <meta name="theme-color" content="#12344D" />

//       {/* Canonical */}

//       <link rel="canonical" href={url} />

//       {/* Open Graph */}

//       <meta property="og:type" content={type} />

//       <meta property="og:title" content={title} />

//       <meta property="og:description" content={description} />

//       <meta property="og:url" content={url} />

//       <meta property="og:site_name" content={siteName} />

//       <meta property="og:image" content={image} />

//       <meta property="og:locale" content="en_IN" />

//       {/* Twitter */}

//       <meta name="twitter:card" content="summary_large_image" />

//       <meta name="twitter:title" content={title} />

//       <meta name="twitter:description" content={description} />

//       <meta name="twitter:image" content={image} />

//       {/* Mobile */}

//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//     </Helmet>
//   );
// };

// export default SEO;

import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image = "https://www.mechvolttechnologies.com/Engineering.png",
  url = "https://www.mechvolttechnologies.com",
  type = "website",
}) => {
  const siteName = "Mech Volt Technologies";

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mech Volt Technologies" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#12344D" />

      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default SEO;
