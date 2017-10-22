/*
 * ErrorPage Messages
 *
 * This contains all the text for the ErrorPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.ErrorPage.header',
    defaultMessage: 'This is ErrorPage container !',
  },
  notFoundTitle: {
    id: 'app.containers.ErrorPage.notFoundTitle',
    defaultMessage: 'Page not found',
  },
  notFoundContent: {
    id: 'app.containers.ErrorPage.notFoundTitle',
    defaultMessage: 'We can\'t seem to find the page you\'re looking for.',
  },
  forbiddenTitle: {
    id: 'app.containers.ErrorPage.forbiddenTitle',
    defaultMessage: 'Page forbidden',
  },
  forbiddenContent: {
    id: 'app.containers.ErrorPage.forbiddenContent',
    defaultMessage: 'You don\'t have access to the page you requested.',
  },
  unknownTitle: {
    id: 'app.containers.ErrorPage.unknownTitle',
    defaultMessage: 'Unknown error',
  },
  unknownContent: {
    id: 'app.containers.ErrorPage.unknownContent',
    defaultMessage: 'We\'re encountered unknown error, We\'ll fix this as soon as possible.',
  },
});
