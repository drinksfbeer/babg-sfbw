import Document, {
  Head,
  Main,
  NextScript,
} from 'next/document';

export default class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://use.fontawesome.com/releases/v5.3.1/css/svg-with-js.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.typekit.net/hxl2spf.css" />
          <link
            rel="sstylesheet"
            href="/_next/static/style.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
