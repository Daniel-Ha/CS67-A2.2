import {useState} from 'react'
import {
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Flatlist
} from 'react-native'
import {useRouter} from 'expo-router';

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const Welcome = () => {
  const router = useRouter();

  return(
    <View style={{ backgroundColor: '#404a55', padding: 10, borderRadius: 5 }}>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Welcome to my personal website!</Text>
      </View>
    </View>
  )
}

export default Welcome