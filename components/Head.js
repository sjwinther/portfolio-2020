import { useEffect } from 'react'
import Head from 'next/head'

const DefaultHead = () => {
  const title = 'Sebastian Winther'
  const description =
    "Portfolio of Sebastian Winther, digital designer and frontend developer. I'm formally educated in UX research and UI design, and self taught in frontend development. I'm available for freelance work."
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="https://www.sebastianwinther.com/favicon.png" />
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sebastianwinther.com" />
      <meta
        property="og:image"
        content="https://www.sebastianwinther.com/og-image.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@sebjwinther" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.sebastianwinther.com/og-image.png"
      />
    </Head>
  )
}
export default DefaultHead
