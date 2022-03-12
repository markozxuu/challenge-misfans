import NextHead from 'next/head';

const defaultImage =
  'https://api.microlink.io/?adblock=false&waitForTimeout=1500&meta=false&screenshot&element=%23screenshot&embed=screenshot.url&url=https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dchris-biscardi%26name%3DMarkoz%2BPe%25C3%25B1a%26title%3DChallenge%2Bfor%2Bmisfans%23';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

const Head = ({
  title = 'Challenge misfans',
  description = 'This is challenge for misfans',
  image = defaultImage,
  children,
}: Props) => {
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Images */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://challenge-misfans.vercel.app/" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@markozxuu" />
      <meta name="apple-mobile-web-app-title" content="Markoz" />
      <meta name="author" content="Markoz Peña" />

      {/* Favicons */}
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        href="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png"
      />
      <link rel="manifest" href="/manifest.json" />
      {children}
    </NextHead>
  );
};

export default Head;
