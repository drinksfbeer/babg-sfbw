import App, { Container } from 'next/app';
import Head from 'next/head';
import cookies from 'next-cookies';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Favicon from 'react-favicon';
import { composeWithDevTools } from 'redux-devtools-extension';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from '../components/common/scrollToTop';
import NotificationsContainer from '../components/mainLayout/notificationsContainer';
import reducers from '../redux/reducers';
import Actions from '../redux/actions';

const initStore = (initialState) => {
  const thunkyMiddleware = composeWithDevTools(applyMiddleware(thunk));
  return createStore(reducers, initialState, thunkyMiddleware);
};

library.add(fab);
library.add(fas);

class MainApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const asyncAction = bindActionCreators(Actions.asyncAction, ctx.store.dispatch);

    // fetch SFBW pages from database
    if (ctx.store.getState().pages.list._list.length === 0) {
      console.log('[ > ] Fetching pages...'); // eslint-disable-line
      await asyncAction('getPages', null, null, (err, response) => {
        if (err) {
          console.log('[ ! ] Error:', err); // eslint-disable-line
        } else {
          console.log('[ < ] Successful. Fetched', response.length, 'page(s).'); // eslint-disable-line
        }
      });
    }
    await asyncAction('getSponsors');

    // check for authentication token in cookies
    if (ctx.isServer) {
      const cookie = cookies(ctx);
      if (cookie.token) {
        console.log('[ > ] Detected auth token cookie, authenticating...'); // eslint-disable-line
        console.log('[ i ] Token:', cookie.token); // eslint-disable-line
        await asyncAction('token', {
          token: cookie.token,
        }, null, (err, response) => {
          if (err) {
            console.log('[ ! ] Error:', err); // eslint-disable-line
          } else {
            console.log('[ < ] Authenticated:', response.email); // eslint-disable-line
          }
        });
      } else {
        console.log('[ i ] No auth token cookie detected.'); // eslint-disable-line
        ctx.store.dispatch({ type: 'LOGOUT_USER' }); // just in case lul
      }
    }

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    console.log('[ i ] _app.js: getInitialProps() done'); // eslint-disable-line

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Head>
          <title>SF Beer Week 2019</title>
        </Head>
        <Favicon url="../static/images/Icon-192.png" />
        <Provider store={store}>
          <ScrollToTop>
            <NotificationsContainer>
              <Component {...pageProps} />
            </NotificationsContainer>
          </ScrollToTop>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MainApp);
