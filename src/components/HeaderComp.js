import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/dist/Entypo"
import { colors } from '../theme/Colors'
import { } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const HeaderComp = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.ıconContainer}>
            <TouchableOpacity>
                <Entypo style={styles.ıcon} name="shopping-bag" size={30} color={colors.ghostwhite} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")} >
                <Entypo style={styles.ıcon}
                    name="shopping-cart" size={30}
                    color={colors.ghostwhite} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComp

const styles = StyleSheet.create({
    ıconContainer: {
        flexDirection: "row",
        width: "100%",
        padding: 15,
        justifyContent: "space-between"
    },
    ıcon: {
        backgroundColor: colors.whitesmoke,
        padding: 12,
        borderRadius: 10
    }
})