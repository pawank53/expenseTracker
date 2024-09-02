import React, { useRef } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import * as Animatable from "react-native-animatable"

const IconButton = ({ name, size, color, onPress }) => {
     
    const animatableRef=useRef(null);

    const pressHandler=()=>{
        if(animatableRef.current){
            animatableRef.current.swing(100).then(()=>{
                if(onPress){
                    onPress();
                }
            })
        }
    }
    return (
        <Animatable.View ref={animatableRef} useNativeDriver>
            <Pressable onPress={pressHandler} style={({ pressed }) => pressed && styles.pressed}>
                <View style={styles.container}>
                    <Icon name={name} color={color} size={size} />
                </View>
            </Pressable>
        </Animatable.View>
    )
}
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    container: {
        padding: 8,
        marginHorizontal: 8,
        marginVertical: 2,
        borderRadius: 20
    }
})
export default IconButton;