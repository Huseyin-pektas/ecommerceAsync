import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/dist/AntDesign"
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Cart = ({ data, product, setProduct, getDataFromDB, getTotal }) => {

    const removeQuantitiy = async id => {
        let newArray = await AsyncStorage.getItem("cartItems")
        newArray = JSON.parse(newArray)

        if (newArray) {
            let array = newArray.filter(item => item !== id)
            await AsyncStorage.setItem("cartItems", JSON.stringify(array))
            getDataFromDB()
        }
    }


    // burada arttırma ve azaltma işlemleri bir fonksiyonunu yapacağız,
    // ternary operötörü kullanılabilir

    const updateQuantity = (id, type) => {
        const updateNewQuantity = product.map((item) => {
            if (item.id === id) {
                let NewQuantity = type === "increase" ? (item.quantity + 1) : (item.quantity - 1)
                item.quantity = NewQuantity > 0 ? (NewQuantity) : (removeQuantitiy(id))
            }
            return item
        })
        setProduct(updateNewQuantity)
        getTotal(updateNewQuantity)
    }
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ProductInfo", { productID: data.id })}
            style={{
                width: "100%",
                flexDirection: "row",
                height: 110,
                marginVertical: 6
            }}>
            <View style={styles.containerImage}>
                <Image
                    style={styles.ImageCart}
                    source={data.productImage} />
            </View>
            <View style={styles.ProductDetail}>
                <View>
                    <Text style={{
                        fontWeight: "bold"
                    }}>{data.productName}  </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>{data.productPrice * data.quantity} ₺ </Text>
                        <Text style={{
                            opacity: 0.6
                        }}>( {data.productPrice * data.quantity +
                            (data.productPrice * data.quantity) / 20}{' '}
                            ₺ eski fiyat )
                        </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View style={{
                        width: "50%",

                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity
                                onPress={() => updateQuantity(data.id, "decrease")}
                            >

                                <AntDesign style={{
                                    fontSize: 15,
                                    borderRadius: 20,
                                    backgroundColor: colors.backGround.ghostwhite,
                                    padding: 5,
                                }}
                                    name='minus'
                                />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 15,
                                borderRadius: 20,
                                padding: 5,
                            }}>{data.quantity}</Text>
                            <TouchableOpacity onPress={() => updateQuantity(data.id, "increase")}>
                                <AntDesign style={{
                                    backgroundColor: colors.backGround.ghostwhite,
                                    fontSize: 15,
                                    borderRadius: 20,
                                    padding: 5,
                                }}
                                    name='plus'
                                />
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View>
                        <TouchableOpacity onPress={() => removeQuantitiy(data.id)}
                            style={{
                                marginRight: 10,
                                opacity: 0.7
                            }}>
                            <MaterialCommunityIcons name='trash-can-outline' size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Cart

const styles = StyleSheet.create({
    containerImage: {
        width: "30%",
        height: 100,
        backgroundColor: colors.backGround.ghostwhite,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10

    },
    ImageCart: {
        width: "100%",
        height: "100%",
        paddingTop: 10
    },
    ProductDetail: {
        marginLeft: 5,
        flex: 1,
        height: "100%",
        justifyContent: "space-around"
    }
})