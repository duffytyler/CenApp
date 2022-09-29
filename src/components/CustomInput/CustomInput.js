import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value,setValue, placeholder,secureTextEntry}) =>{
    return(
        <View style={styles.container}>
                <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                style={styles.input}
                secureTextEntry={secureTextEntry}
                />
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
        alignItems:'center',
        backgroundColor: "#D4D4D4",
        borderRadius: 30,
        justifyContent:'center',
        width: "85%",
        maxWidth:450,
        height: 55,
        marginBottom:30,
    },
    input:{
        fontSize:18
    },
});

export default CustomInput