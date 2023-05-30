/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from "react-redux";
import { store } from './src/redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = new HttpLink({
    uri: 'http://192.168.0.103:4000/graphql'
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

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    )
}



AppRegistry.registerComponent(appName, () => Root);
