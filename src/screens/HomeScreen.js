import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/dist/Entypo"
import { colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'
import HeaderComp from '../components/HeaderComp'
const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
            <ScrollView>
                <HeaderComp />
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

                            }}>Products</Text>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: "400",
                                paddingLeft: 10,
                                color: colors.black,
                                opacity: 0.5
                            }}>41</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{
                                color: colors.blue,
                                fontSize: 17
                            }}>SeeAll</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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