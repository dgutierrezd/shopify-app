import React, { Component } from "react";
import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import "@shopify/polaris/styles.css";
import translationEn from "@shopify/polaris/locales/en.json";
import translationEs from "@shopify/polaris/locales/es.json";
import Cookies from 'js-cookie';
import { ApolloProvider } from 'react-apollo';
import client from "../graphql/ApolloClient";

class MyApp extends Component {
  state = {};
  render() {
    const { Component, pageProps } = this.props;
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get('shopOrigin'), forceRedirect: true };
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider i18n={translationEn}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
