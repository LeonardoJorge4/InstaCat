import React from "react"
import { Text, StyleSheet } from "react-native"

const Logo = () => {
    return <Text style={styles.logo}>InstaCat</Text>
}

const styles = StyleSheet.create ({
    logo: {
        alignSelf: "center", //alinhar-se
        marginVertical: 20, //da um espaçamento na parte de cima
    }
})

export default Logo