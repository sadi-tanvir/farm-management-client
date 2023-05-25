import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Provider } from "react-redux";
import { store } from './src/redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const httpLink = new HttpLink({
  uri: 'http://192.168.0.101:4000/graphql'
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('accessToken');
  return {
      headers: {
          ...headers,
          authorization: token ? token : '',
      },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </ApolloProvider>
  );
};

export default App;