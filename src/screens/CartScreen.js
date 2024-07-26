import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../theme/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Items } from '../database/Database'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Cart from '../components/Cart'

const CartScreen = () => {
    const navigation = useNavigation()
    const [product, setProduct] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        getDataFromDB()
    }, [navigation])

    const getDataFromDB = async () => {

        //* AsyncStorage dan veriyi al
        let items = await AsyncStorage.getItem('cartItems');
        //console.log(items);
        //* Aldığımız veriyi JSON a çevirme
        items = JSON.parse(items);

        let productData = [];
        if (items) {
            //* Sepetteki ürüne miktar ekleyebilimek için dönüp produtcData dizisine veriyi ekledik
            Items.forEach(data => {
                if (items.includes(data.id)) {
                    data.quantity = 1; // eklenilen idli ürünlerin miktarlarını 1 yap
                    productData.push(data); // productData dizisine ekle
                }
            });
            //* Product statei güncellendi
            setProduct(productData);
            getTotal(productData)
        } else {
            setProduct([]);
            setTotal(0);
        }
    };
    //console.log(product, "product");
    const getTotal = productData => {
        let total = 0
        //console.log("producttttDATA", productData);
        for (let index = 0; index < productData.length; index++) {
            let productTotalPrice = productData[index].productPrice * productData[index].quantity
            //console.log(productTotalPrice, "toplam ne kadar");
            total += productTotalPrice;
        }
        setTotal(total)
    }
    const checkout = async () => {
        try {
            await AsyncStorage.removeItem('cartItems');
        } catch (error) {
            return error;
        }
        navigation.navigate('Home');
    };
    return (
        <>
            {product.length > 0 ? (
                <View style={{
                    backgroundColor: colors.white,
                    flex: 1,
                    width: "100%",
                    height: "100%"
                }}>
                    <ScrollView>
                        <View style={styles.container}>
                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => navigation.goBack()}>
                                <MaterialCommunityIcons name="chevron-left" size={20} />
                            </TouchableOpacity>
                            <Text style={styles.orderTitle}>Order Details</Text>
                        </View>
                        {product.length > 0 ?
                            product.map((data, i) => (<Cart getDataFromDB={getDataFromDB} key={i} data={data} product={product} setProduct={setProduct} getTotal={getTotal} />))
                            : null}


                        <View>
                            <View>
                                <Text style={styles.locationText}>Delivery Locaiton</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingHorizontal: 16,
                                        marginVertical: 10,
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            width: '80%',
                                            alignItems: 'center',
                                        }}>
                                        <View style={styles.deliveryBox}>
                                            <MaterialCommunityIcons
                                                name="truck-delivery-outline"
                                                size={18}
                                                color={colors.blue}
                                            />
                                        </View>
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    color: colors.black,
                                                    fontWeight: '500',
                                                }}>
                                                İstanbul-Beşiktaş
                                            </Text>
                                        </View>
                                    </View>

                                    <MaterialCommunityIcons
                                        name="chevron-right"
                                        size={22}
                                        color={colors.black}
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.locationText}>Payment Method</Text>
                        <View style={{ paddingHorizontal: 16, marginVertical: 10 }}>
                            <View
                                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={styles.creditCard}>
                                        <Text
                                            style={{
                                                color: colors.blue,
                                            }}>
                                            VISA
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>VISA Classic</Text>
                                        <Text style={{ opacity: 0.6 }}>****-2121</Text>
                                    </View>
                                </View>
                                <MaterialCommunityIcons
                                    name="chevron-right"
                                    size={22}
                                    color={colors.black}
                                />
                            </View>
                        </View>

                        <Text style={styles.locationText}>Order Info</Text>
                        <View
                            style={{
                                paddingHorizontal: 16,
                                marginVertical: 10,
                                gap: 10,
                            }}>
                            <View
                                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text
                                    style={{
                                        opacity: 0.5,
                                        fontSize: 12,
                                        fontWeight: '400',
                                    }}>
                                    Subtotal
                                </Text>
                                <Text
                                    style={{
                                        color: colors.black,
                                        fontSize: 12,
                                        fontWeight: '400',
                                    }}>
                                    {total} ₺
                                </Text>
                            </View>
                            <View
                                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text
                                    style={{
                                        opacity: 0.5,
                                        fontSize: 12,
                                        fontWeight: '400',
                                    }}>
                                    Shipiing Tax
                                </Text>
                                <Text
                                    style={{
                                        color: colors.black,
                                        fontSize: 12,
                                        fontWeight: '400',
                                    }}>
                                    {total / 20} ₺
                                </Text>
                            </View>
                            <View
                                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text
                                    style={{
                                        opacity: 0.5,
                                        fontSize: 12,
                                        fontWeight: '400',
                                    }}>
                                    Subtotal
                                </Text>
                                <Text
                                    style={{
                                        color: colors.black,
                                        fontSize: 12,
                                        fontWeight: '400',
                                    }}>
                                    {total + total / 20} ₺
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 10,
                            height: '8%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity
                            onPress={() => checkout()}
                            style={{
                                backgroundColor: colors.blue,
                                width: '86%',
                                height: '90%',
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    color: colors.white,
                                    fontSize: 12,
                                    fontWeight: '500',
                                    letterSpacing: 1,
                                }}>
                                CHECKOUT {total + total / 20}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        backgroundColor: colors.white,
                    }}>
                    <Text>Sepette Ürün Yoktur</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            marginTop: 10,
                        }}>
                        <Text
                            style={{
                                textDecorationLine: 'underline',
                                color: colors.blue,
                            }}>
                            Ürün eklemek için ana sayfaya git
                        </Text>
                    </TouchableOpacity>
                </View>)
            }
        </>
    );
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16
    },
    backButton: {
        backgroundColor: colors.backGround.ghostwhite,
        borderRadius: 10, padding: 10
    },
    orderTitle: {
        fontSize: 15,
        fontWeight: "bold"
    }
})