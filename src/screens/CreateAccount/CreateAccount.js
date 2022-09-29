import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Labels from '../../components/Labels/Labels';
import Titles from '../../components/Titles/Titles';
import { useNavigation } from '@react-navigation/native';
const CreateAccount = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [vpassword, setvPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = useNavigation();
  const onCreateAcc = () => {
    console.warn("Create Account");
    navigation.navigate('Login');
  }
  const onTOS = () => {
    console.warn("TOS");
  }
  return(
    
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Titles text = "Create Account" />
      <Labels text = "Full Name"/>
      <CustomInput
      value={name}
      setValue={setName}
      />
      <Labels text = "Email"/>
      <CustomInput
      value={email}
      setValue={setEmail}
      />
      <Labels text = "Password"/>
      <CustomInput
      value={password}
      setValue={setPassword}
      secureTextEntry
      />
      <Labels text = "Re-type Password"/>
      <CustomInput
      value={vpassword}
      setValue={setvPassword}
      secureTextEntry
      />
      <Text style={{color:'white', paddingBottom: 30}}>I accept the{' '} <Text style={styles.link} onPress={onTOS}>Terms of Use</Text></Text>
      <CustomButton onPress={onCreateAcc} text = "CREATE ACCOUNT"/>
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
  link:{
    color: 'white',
    textDecorationLine: 'underline',
    paddingBottom: 15,
  },

})
export default CreateAccount