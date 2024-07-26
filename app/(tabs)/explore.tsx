// app/(tabs)/explore.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ExploreScreen() {
  const [adminPassword, setAdminPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigation = useNavigation();

  const handleAdminLogin = () => {
    if (adminPassword === '11235813') {
      alert('Login de administrador bem-sucedido');
      navigation.goBack(); // Volta para a tela anterior (HomeScreen)
    } else {
      alert('Senha do administrador incorreta');
    }
  };

  const handleUserLogin = () => {
    alert('Login de usuário');
  };

  return (
    <ImageBackground
      source={require('@/assets/images/background-image.png')}
      style={styles.background}
    >
      <View style={styles.overlay} />
      
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      
      <View style={styles.container}>
        <View style={styles.adminContainer}>
          <Text style={styles.label}>Login de Administrador</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha do administrador"
            secureTextEntry
            value={adminPassword}
            onChangeText={setAdminPassword}
          />
          <Button title="Entrar" onPress={handleAdminLogin} color="rgba(118,0,0,1)" />
        </View>

        <View style={styles.userContainer}>
          <Text style={styles.label}>Login de Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={userEmail}
            onChangeText={setUserEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={userPassword}
            onChangeText={setUserPassword}
          />
          <Button title="Entrar" onPress={handleUserLogin} color="rgba(118,0,0,1)" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logoContainer: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 150,
  },
  adminContainer: {
    width: '100%',
    padding: 20,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  userContainer: {
    width: '100%',
    padding: 20,
    marginTop: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});