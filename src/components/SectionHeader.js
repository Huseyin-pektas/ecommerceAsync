import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'
import ProductCart from '../components/ProductCart'

const SectionHeader = ({ products, accessory, title1, count1, title2, count2 }) => {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.ContainerHeader}>
                <Text style={styles.headerText}> Hi-Fi Shop &amp; Service </Text>
                <Text style={styles.textParagraf}>Audio shop on Rustaveli Ave 57.  this shop</Text>
            </View>
            <View style={{ padding: 16 }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"

                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: colors.black,
                            fontWeight: "bold",
                            letterSpacing: 1

                        }}>{title1}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            paddingLeft: 10,
                            color: colors.black,
                            opacity: 0.5
                        }}>{count1}</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{
                            color: colors.blue,
                            fontSize: 17
                        }}>SeeAll</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    flexWrap: "wrap"
                }}>
                    {
                        products.map((data, i) => (
                            <ProductCart key={i} data={data} />
                        ))
                    }
                </View>

            </View>
            <View style={{ padding: 16 }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"

                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: colors.black,
                            fontWeight: "bold",
                            letterSpacing: 1

                        }}>{title2}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            paddingLeft: 10,
                            color: colors.black,
                            opacity: 0.5
                        }}>{count2}</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{
                            color: colors.blue,
                            fontSize: 17
                        }}>SeeAll</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    flexWrap: "wrap"
                }}>
                    {
                        accessory.map((data, i) => (
                            <ProductCart data={data} key={i} />
                        ))
                    }
                </View>

            </View>
        </>
    )
}

export default SectionHeader

const styles = StyleSheet.create({
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