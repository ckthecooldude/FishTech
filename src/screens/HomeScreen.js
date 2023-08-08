import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import UrlInput from '../components/UrlInput';



const HomeScreen = () => {

  const [report, setReport] = useState([]);

  const handleReport = (reportData) => {
    setReport(reportData);
    console.log(report);
  };

    return (
    <ImageBackground
    source={require('../../assets/background.jpg')} 
    style={styles.backgroundImage}
    imageStyle={{ opacity: 0.7}} 
  >

    

    <View style={styles.container}>
        
        <UrlInput onReport={handleReport}/>

    
        </View>

        </ImageBackground>
    )
}

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
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
    })

   


export default HomeScreen;