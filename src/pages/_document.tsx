import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Aaryen Portfolio</title>
      <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Iso&family=Source+Code+Pro:wght@400;500;700&family=VT323&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumar+One+Outline&display=swap"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
