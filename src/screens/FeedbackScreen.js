import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackScreen = () => {
  return (

    <ImageBackground
    source={require('../../assets/background.jpg')} 
    style={styles.backgroundImage}
    imageStyle={{ opacity: 0.7}} 
  >

    <View style={styles.container}>
      <Text style={styles.headerText}>Feedback Form</Text>
      <FeedbackForm />
    </View>

</ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin:50,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    
  },
  headerText: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default FeedbackScreen;
