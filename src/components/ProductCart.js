import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'

const ProductCart = ({ data }) => {
    const navigation = useNavigation()
    //console.log(data, "data da ne var");
    return (
        //burada productInfo ya bir ıd gönderiyoruz.
        <TouchableOpacity onPress={() => navigation.navigate("ProductInfo", { productId: data.id })}
            style={{
                width: "48%",
                marginVertical: 14,
            }} >

            <View style={styles.cart}>
                {data?.isOff && (
                    <View style={{
                        backgroundColor: colors.green,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderTopLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}>
                        <Text style={styles.percentge}>{data.offPercentage}%</Text>
                    </View>
                )}
                <Image style={styles.Img}
                    source={data.productImage} />
            </View>
            <Text style={styles.productText}>{data.productName}</Text>
            <Text style={styles.productPrice}>{data.productPrice} tl</Text>
        </TouchableOpacity>
    )
}

export default ProductCart

const styles = StyleSheet.create({
    cart: {
        backgroundColor: colors.backGround.medium,
        position: "relative",
        height: 120,
        width: "100%",
        alignItems: "center",
        justifyContent: "center", borderRadius: 10,

    },
    Img: {
        width: "70%",
        height: "95%"
    },
    percentge: {},
    productText: {
        fontWeight: "600",
        color: colors.black,
        marginVertical: 2
    },
    productPrice: {
        color: colors.black,
        opacity: 0.5
    }
})