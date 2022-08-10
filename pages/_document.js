import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark" lang="en">
         <Head>
        {/* <title>Chase Finance</title> */}
            <meta name="description" content="Chase Fintoken. Digital Assets Portfolio Manager" />
            <link rel="icon" href="/logo.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ramaraja&display=swap" rel="stylesheet" />
    </Head>
        <body className="bg-gray-900 text-white focus:outline-none outline-hidden font-serif">
          <Main />
          <NextScript />
        </body>
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v14.0'
        });
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
            `,
          }}
        />

        <div className="fb-customerchat"
          attribution="biz_inbox"
          page_id="103599749122645">
        </div>
      </Html>
    )
  }
}

export default MyDocument