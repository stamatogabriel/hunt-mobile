import React from 'react';
import { Text, WebView } from 'react-native';


const Product = ({ navigation }) => (//stateless component
    <WebView source={{ uri: navigation.state.params.product.url }} />
    ); 

Product.navigationOptions = ({ navigation }) => ({ //props estaticas
    title: navigation.state.params.product.title
})

export default Product;