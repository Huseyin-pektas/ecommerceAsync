import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from "react-native-vector-icons/dist/Entypo"
import { colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'
import HeaderComp from '../components/HeaderComp'
import ProductCart from '../components/ProductCart'
import { Items } from '../database/Database'
import SectionHeader from '../components/SectionHeader'


const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [accessory, setAccessory] = useState([]);

    useEffect(() => {
        getDataFromDB()
    }, []);

    const navigation = useNavigation()

    const getDataFromDB = () => {
        let productList = []
        let acceesoryList = []
        for (let index = 0; index < Items.length; index++) {
            // const element = array[index];
            if (Items[index].category === "product") {
                productList.push(Items[index])
            } else {
                acceesoryList.push(Items[index])
            }
        }
        setProducts(productList)
        setAccessory(acceesoryList)
    }
    // console.log(products);

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
            <ScrollView>
                <HeaderComp />
                <SectionHeader accessory={accessory} products={products} title1={"Products"} title2={"Accessories"} count1={41} count2={78} />

            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: colors.backGround.ghostwhite
    },
    ContainerHeader: {
        marginBottom: 10,
        padding: 16
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.black,
        marginBottom: 10
    },
    textParagraf: {
        letterSpacing: 1,
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 20
    }
})