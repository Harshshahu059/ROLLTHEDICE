import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, Vibration, View, } from 'react-native'
import React, { JSX, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { trigger } from "react-native-haptic-feedback";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// images
import One from "../assets/One.png"
import Two from "../assets/Two.png"
import Three from "../assets/Three.png"
import Four from "../assets/Four.png"
import Five from "../assets/Five.png"
import Six from "../assets/Six.png"

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image
        style={styles.image}
        source={imageUrl}
      />
    </View>
  )
}



const App = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(One)
  const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


  const rollDiceOnTap = () => {
    const imageNum = Math.floor(Math.random() * 6)
    console.log(imageNum)
    switch (imageNum) {
      case 1:
        setDiceImage(One)
        break;
      case 2:
        setDiceImage(Two)
        break;
      case 3:
        setDiceImage(Three)
        break;
      case 4:
        setDiceImage(Four)
        break;
      case 5:
        setDiceImage(Five)
        break;
      case 6:
        setDiceImage(Six)        
        break;

      default:
        setDiceImage(Two)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);

  }
  return (
    <View style={styles.container} >
      <Dice imageUrl={diceImage} />
      {/* <Pressable style={styles.btn} onPress={rollDiceOnTap}>
       <Text style={styles.btnText}>ROLL THE DICE</Text>
      </Pressable> */}
      <TouchableOpacity style={styles.btn} onPress={rollDiceOnTap}>
       <Text style={styles.btnText}>ROLL THE DICE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ffffff",
    height:"100%",
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  image: {
    width: 200,
    height: 200
  },
  btn:{
    borderColor:"#0f6bffff",
    borderWidth:1,
    width:180,
    height:50,
    borderRadius:10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
        
  },
  btnText:{
    fontWeight:"bold",
    color:"#0055ffff"
  }
})