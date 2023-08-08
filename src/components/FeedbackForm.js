import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [satisfaction, setSatisfaction] = useState(5); // Default satisfaction rating
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Here, you can send the form data to your server using an API call
    // For simplicity, we'll just log the data for now
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Satisfaction:', satisfaction);
    console.log('Description:', description);

    // Reset form fields after submission (optional)
    setName('');
    setEmail('');
    setSatisfaction(5);
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User's Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Email (optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Satisfaction</Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={satisfaction}
          onValueChange={(itemValue) => setSatisfaction(itemValue)}
        >
          {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
            <Picker.Item key={value} label={value.toString()} value={value} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Description (optional)</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Enter your description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 16,
  },
  picker: {
    height: 40,
  },
  buttonContainer: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackForm;
