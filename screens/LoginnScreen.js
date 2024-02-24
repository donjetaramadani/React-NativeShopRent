import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet,} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';



const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 25 }}>
      <View style={{  maxWidth: 400, alignSelf: 'center'}}>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 45 }}>
          <View style={{ flex: 1, marginBottom: 20}}>
            <InputField
              label={'Password'}
              icon={
                <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
              }
              inputType="password"
              style={{ marginBottom: 20 }}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')} style={{ marginBottom: -75 }}>
            <Text style={{ color: '#AD40AF', fontSize: 14, fontWeight: '700' }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <CustomButton label={"Login"} onPress={() => { }} />

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
       
  <TouchableOpacity
                onPress={() => { }}
                style={{
                  borderColor: '#ddd',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
           
            <Image
                source={require('./img/google.png')}
                style={{ width: 45, height: 45 }} 
                resizeMode="contain"
             />
    </TouchableOpacity>
          <TouchableOpacity
                  onPress={() => { }}
                  style={{
                    borderColor: '#ddd',
                    borderWidth: 2,
                    borderRadius: 10,
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                  }}>
          
                  <Image
                      source={require('./img/Facebook.png')}
                      style={{ width: 45, height: 45 }} 
                      resizeMode="contain"
                  />
          </TouchableOpacity>
          <TouchableOpacity
                  onPress={() => { }}
                  style={{
                    borderColor: '#ddd',
                    borderWidth: 2,
                    borderRadius: 10,
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                  }}>
              
                <Image
                    source={require('./img/x.jpg')}
                    style={{ width: 45, height: 45 }} 
                    resizeMode="contain"
                  />
       </TouchableOpacity>
        </View>

      
   
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    marginTop: 20, 
  },
  imageContainer: {
    flex: 1, 
    marginHorizontal: 5, 
  },
  image: {
    width: '100%', 
    height: undefined, 
    aspectRatio: 1, 
    borderWidth: 1,
    borderColor: '#ddd', 
  },
});
export default LoginScreen;
