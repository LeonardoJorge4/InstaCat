import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Photo = ({ file, count }) => {
    const [like, setLike] = useState(count)  //estado inicial é 0

    const increment = () => {
        setLike(like + 1)
      }

    return (
        <View style={styles.container}>

            <Text style={styles.text}></Text>

            <Image style={styles.image} source={file}></Image>

        <TouchableOpacity onPress={increment}>
    <Text>{like} Like</Text>
        </TouchableOpacity>

      </View>
    )
}

const styles = StyleSheet.create ({

    container: {
      flex: 1,  //posicionamento de caixa
      alignItems: "center", //alinhamento de itens
      justifyContent: "center" //justificar o conteúdo
    },
  
    text: {
      fontSize: 22 // tamando da fonte
    },

    image: {
      height: 180,
      width: 180,
    }

})

  
export default Photo