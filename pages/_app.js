import React, { Component } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import translationEn from '@shopify/polaris/locales/en.json';
import translationEs from '@shopify/polaris/locales/es.json';

class MyApp extends Component {
    state = {  }
    render() { 
        const { Component, pageProps } = this.props;
        return (  
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet="utf-8" />
                </Head>
                <AppProvider i18n={translationEn}>
                    <Component {...pageProps} />
                </AppProvider>
            </React.Fragment>
        );
    }
}
 
export default MyApp;