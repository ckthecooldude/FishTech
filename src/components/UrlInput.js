import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ApiProcessor from './ApiProcessor';
const UrlInput = ({ onReport }) => {
  const [url, setUrl] = useState('');

 
  const handleSubmit = async () => {
    const report = await ApiProcessor(url);
    onReport(report);
    setUrl('');
  };

  return ( 
    <View style={styles.container}>
    <View style={styles.backgroundStyle}>
      <TextInput
      autoCapitalize="none"
      autoCorrect={false}
        style={styles.textInput}
        onChangeText={setUrl}
        value={url}
        placeholder="Enter your URL here"
      />
       </View>
<View>
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={{ color: 'white', fontSize: 15  }}>Check URL</Text>
      </TouchableOpacity>
      </View>
   </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        

        },
 backgroundStyle: {
    flexDirection: 'row', 
    marginHorizontal: 20,
    marginTop:20,  
  },
  textInput: {
    width: '100%', 
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10, 
    paddingHorizontal: 10,
    alignSelf: 'stretch',
  },
  submitButton: {
    backgroundColor: '#383f5e',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start', 
  },
});

export default UrlInput;
