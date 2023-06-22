'use client';

import { ApolloProvider } from '@apollo/client';
import client from '../../services/apollo-client';

const GraphQlProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQlProvider;
