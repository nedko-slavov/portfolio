import Document, { Head, Main, NextScript } from "next/document";
import "../styles.scss";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Nedko Slavov CV</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
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
