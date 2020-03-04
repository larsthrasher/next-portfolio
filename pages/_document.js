import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="A site for my programming portfolio"/>
          <meta charset="utf-8" />
          <meta name="robots" contents="noindex, nofollow"/>
          <meta name="viewport" content="width=device-width"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
            body {
              font-family: 'Open Sans Condensed', sans-serif;
            }
          `}</style>
      </html>
    )
  }
}
