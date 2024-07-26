import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('@/assets/images/background-image.png')}
        style={styles.backgroundImage}
      />
      
      {/* Semi-transparent Gray Container */}
      <View style={styles.overlay}>
        {/* Logo */}
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
        
        {/* Transparent Label */}
        <View style={styles.transparentLabelContainer}>
          <Text style={styles.transparentLabelText}>Explicações Individuais</Text>
        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.button} onPress={() => alert('Começar Pressionado')}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>

        {/* Info Label at the Bottom */}
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
    backgroundColor: '#f6eeee', // Fallback background color
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
    backgroundColor: 'rgba(0,0,0,0.4)', // Gray overlay with transparency
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 220,
    height: 220,
    marginTop: 50, // Push the logo towards the top
  },
  transparentLabelContainer: {
    backgroundColor: 'rgba(252, 252, 252, 0.31)', // Semi-transparent white
    padding: 10,
    borderRadius: 5,
    width: '200%', // Make the label take the full width
    alignItems: 'center', // Center text horizontally
    marginVertical: 0, // Spacing between the logo and label
  },

  transparentLabelText: {
    color: '#ffffff', // Black text
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
    marginBottom: 20, // Spacing between the button and info label
  },
  buttonText: {
    color: 'rgba(118,0,0,1)',
    fontSize: 20,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'rgba(66, 64, 64, 0.7)', // Semi-transparent background for info container
    padding: 15,
    borderRadius: 5,
    width: '150%',
    alignItems: 'center',
    marginBottom: 10, // Space from the bottom of the screen
  },
  infoText: {
    color: 'white',
    fontSize: 14.3,
    textAlign: 'center',
  },
});