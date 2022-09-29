import React,{useState} from 'react';
import { View,Text,ImageBackground,Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Logo from '../../../assets/images/logo.png';
import Labels from '../../components/Labels/Labels';
import Titles from '../../components/Titles/Titles';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const onSignIn = () => {
    console.warn("Sign in");
    //validate user
    navigation.navigate('Menu');
  }
  const onForgot = () => {
    console.warn("Forgot password");
    navigation.navigate('ForgotPassword');
  }
  const onNewAcc = () => {
    console.warn("Sign up");
    navigation.navigate('CreateAccount');
  }
  return(
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Image source = {Logo} style={[styles.logo, {height: height *0.3}]} resizeMode ="contain"/>
      <Text style={styles.plaintext}>FSU GEEK</Text>
      <Labels text = "EMAIL" />
      <CustomInput
      value={email}
      setValue={setEmail}
      />
      <Labels text = "PASSWORD"/>
      <CustomInput
      value={password}
      setValue={setPassword}
      secureTextEntry
      />
      <CustomButton onPress={onSignIn} text = "SIGN IN"/>
      <CustomButton type = "TERTIARY" onPress={onForgot} text = "Forgot Password?" />
      <CustomButton type = "TERTIARY" onPress={onNewAcc} text = "Don't have an account? Sign Up" />
    </View>
    </ScrollView>
    </ImageBackground>
   
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent: "center",
  },
  logo:{
    marginBottom:40,
    width: '40%',
    maxWidth: 200,
    maxHeight: 200,
  },
  plaintext: {
    color: "white",
    fontSize: 50,
    fontFamily: 'imprintMTS',
    marginBottom:50,
  },

})
export default Login