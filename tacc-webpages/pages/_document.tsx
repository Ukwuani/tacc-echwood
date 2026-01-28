import * as React from 'react';
import { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from 'next/document';
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from '@mui/material-nextjs/v15-pagesRouter';
import theme, { inter } from '../src/theme';
import Script from 'next/script';

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en" className={inter.className}>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Industrial Automation Training & System Integration | The Automation Control Center - PLC, SCADA, IIoT Courses</title>
        <meta name="description" content="Master industrial automation with TACC. Expert PLC programming courses, SCADA training, IIoT solutions, system integration services, and Industry 4.0 consulting. Get certified by industry professionals."/>
        <meta name="keywords" content="PLC training, SCADA courses, industrial automation, IIoT training, Industry 4.0, system integration, automation consulting, PLC programming, Modbus, OPC UA, MQTT, MES systems"/>
        <meta name="author" content="TACC - The Automation Control Circle"/>
        <meta property="og:title" content="Industrial Automation Training & System Integration | TACC"/>
        <meta property="og:description" content="Master industrial automation with expert-led PLC, SCADA, and IIoT training. Professional system integration and consulting services."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://automationcc.com/"/>
        <meta property="og:image" content="https://automationcc.com/imgs/tacc.png"/>
        <link rel="canonical" href="https://automationcc.com/"/>
        <DocumentHeadTags {...props} />
        
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Tawk.to Chat Widget */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/68885da2db7610192eead9ba/1j1aargfv';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
