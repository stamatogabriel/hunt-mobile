import { createStackNavigator, createAppContainer } from 'react-navigation'; //dá acesso a navegação stack (cliques em botôes)

import Main from './pages/main';
import Product from './pages/product';

const Navigator = createStackNavigator({
    Main,
    Product
}, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#da552f',
        },
    },
});

const Routes = createAppContainer(Navigator);

export default Routes;