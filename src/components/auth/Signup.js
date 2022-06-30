import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {TextInput, Button, ActivityIndicator, Card} from 'react-native-paper';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      password,
    };

    // dispatch(addUserAction(data)).then((res) => {
    // 	if (res.type == "adduser/fulfilled") {
    // 		<View>
    // 			{showMessage({
    // 				message: "Signup successful",
    // 				type: "success",
    // 			})}
    // 		</View>;
    // 	} else {
    // 		<View>
    // 			{showMessage({
    // 				message: "Signup failed",
    // 				type: "danger",
    // 			})}
    // 		</View>;
    // 	}
    // });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo2.png')}
          resizeMode="cover"
          style={styles.logo}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          label="Fullname"
          value="Kingsley Onyebuchi"
          right={<TextInput.Icon name="" />}
          style={styles.form_input}
        />
        <TextInput
          label="Eamil"
          value="godwin2341@gmail.com"
          right={<TextInput.Icon name="email" />}
          style={styles.form_input}
        />
        <TextInput
          label="Phone Number"
          value="08130299583"
          right={<TextInput.Icon name="" />}
          style={styles.form_input}
        />
        <TextInput
          label="Password"
          value="kingsly7"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          style={styles.form_input}
        />
      </View>
      <View style={styles.terms}>
        <Button uppercase={false}>Terms & Conditions apply</Button>
      </View>
      <View style={styles.submit}>
        <TouchableOpacity onPress={handleSubmit}>
          {/* {loading === true ? (
							<ActivityIndicator animating={true} />
						) : ( */}
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              padding: 10,
            }}>
            submit
          </Text>
          {/* )} */}
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <Text>Already have an account?</Text>

        <Button
          onPress={() => navigation.navigate('Login', {name: 'Login'})}
          style={{marginTop: -9, marginLeft: -15}}>
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  input: {
    marginTop: 70,
    padding: 10,
  },
  form_input: {
    borderBottomWidth: 0.005,
    borderBottomColor: '#fefefe',
    border: 'none',
    backgroundColor: 'transparent',
  },
  logoContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  submit: {
    backgroundColor: 'coral',
    width: '90%',
    borderRadius: 5,
    position: 'relative',
    alignSelf: 'center',
	padding:5
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'center',
     
  },
});
export default Signup;
