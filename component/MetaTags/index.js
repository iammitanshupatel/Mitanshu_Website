const fetchStaticMeta = () => {
  return (
    <>
      {/* Essential meta tags */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta name="language" content="EN" />
      {/* SEO-specific meta tags */}
      <meta name="author" content="Mitanshu Patel" />
      <link rel="canonical" href="https://mitanshupatel.com/" />

      {/* Social sharing meta tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mitanshupatel.com/" />
      <meta property="og:image" content="https://mitanshupatel.com/manifest-icon-192.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mitanshu_patel_" />
      <meta name="twitter:image" content="https://mitanshupatel.com/manifest-icon-192.png" />

      {/* Favicons and icons */}
      <link rel="shortcut icon" href="/manifest-icon-192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />

      {/* Progressive Web App support */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/manifest-icon-192.png" />
      {/* apple splash screen images  */}
      <link rel="apple-touch-startup-image" href="/apple-splash-2048-2732.png" sizes="2048x2732" />
      <link rel="apple-touch-startup-image" href="/apple-splash-1668-2224.png" sizes="1668x2224" />
      <link rel="apple-touch-startup-image" href="/apple-splash-1536-2048.png" sizes="1536x2048" />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/apple-splash-1125-2436.png"
        sizes="1125x2436"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/apple-splash-1242-2208.png"
        sizes="1242x2208"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/apple-splash-750-1334.png"
        sizes="750x1334"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/apple-splash-640-1336.png"
        sizes="640x1136"
      />
    </>
  );
};

const fetchDynamicMeta = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};
export { fetchStaticMeta, fetchDynamicMeta };
