import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ProductInfoScreen, CartScreen } from '../screens'

const Stack = createNativeStackNavigator()



const Route = () => {
    return (
        <Stack.Navigator
            screenOptions={{

            }}
            initialRouteName='Home'
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='ProductInfo' component={ProductInfoScreen} />
        </Stack.Navigator>
    )
}

export default Route

const styles = StyleSheet.create({})