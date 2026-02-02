import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'ZeeFrames',
  siteName = 'ZeeFrames - UI/UX Design Agency'
}) => {
  const siteUrl = 'https://zeeframes.com'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@zeeframes" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ZeeFrames",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": "Strategic UI/UX Design Agency transforming ideas into user-centered digital experiences",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "832 Norfolk st",
            "addressLocality": "Houston",
            "addressRegion": "Texas",
            "postalCode": "77098",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-480-920-1123",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.linkedin.com/company/zeeframes/",
            "https://www.instagram.com/zeeframes.design/",
            "https://www.facebook.com/zeeframes",
            "https://dribbble.com/zeeframes"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO