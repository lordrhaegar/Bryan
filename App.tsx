// Module Title: SWE6206: Emerging Technologies
// Assessment Title: Emerging Technologies based Industry Solutions
// StudentID: 2333176
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONTS, IMAGES, SIZES } from "./constants/Assets";
import Colors from './constants/Colors';
import styles from "./styles";
import Vector from "./assets/vectors";
import { pickImage } from './functions';
import { useEffect, useState } from 'react';


export default function App() {
  const [prediction, setPrediction] = useState("")
  useEffect(()=>{
    console.log("prediction>>", prediction);
    
  },[prediction])
  return (
    <SafeAreaView style={[styles.container, { padding: SIZES.p20, justifyContent: 'space-between' }]}>
      {/* <AppStatusBar backgroundColor="#fff" /> */}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={IMAGES.Brain}
          style={{ width: "80%", height: "80%" }}
          resizeMode="contain"
        />
        <View style={styles.predContainer}>
          <Text
            style={{
              color: Colors.primary,
              fontFamily: FONTS.medium,
              fontSize: SIZES.large,
            }}
          >
            Prediction: {prediction}
          </Text>

          
        </View>
      </View>
      {/* <View style={{ marginVertical: 30 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            lineHeight: 40,
            fontFamily: FONTS.bold,
          }}
        >
          Check for Early Signs of Brain Tumor
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            lineHeight: 25,
            marginVertical: 20,
            fontFamily: FONTS.regular,
          }}
        >
          Upload your MRI scan and get a prediction
        </Text>
      </View> */}

      <TouchableOpacity onPress={() => pickImage(setPrediction)}>
        <View style={styles.startButton}>
          <Text
            style={{
              color: Colors.primary,
              fontFamily: FONTS.medium,
              fontSize: SIZES.large,
            }}
          >
            Upload MRI Scan
          </Text>

          <View style={styles.startIcon}>
            <Vector as="feather" name="arrow-up" color="#fff" size={18} />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


