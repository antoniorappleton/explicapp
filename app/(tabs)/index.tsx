// app/(tabs)/index.tsx
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/background-image.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.transparentLabelContainer}>
          <Text style={styles.transparentLabelText}>Explicações Individuais</Text>
        </View>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('explore')}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            antonioappleton@gmail.com | António Appleton | 917 015 201
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#f6eeee',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 220,
    height: 220,
    marginTop: 50,
  },
  transparentLabelContainer: {
    backgroundColor: 'rgba(252, 252, 252, 0.31)',
    padding: 10,
    borderRadius: 5,
    width: '150%',
    alignItems: 'center',
    marginVertical: 10,
  },
  transparentLabelText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'rgba(118,0,0,1)',
    borderWidth: 2,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 80,
    marginBottom: 20,
  },
  buttonText: {
    color: 'rgba(118,0,0,1)',
    fontSize: 20,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'rgba(244, 240, 240, 0.386)',
    padding: 15,
    borderRadius: 5,
    width: '150%',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    color: 'white',
    fontSize: 14.3,
    textAlign: 'center',
  },
});