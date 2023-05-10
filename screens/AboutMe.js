import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const AboutMe = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#262c33' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, color: 'white' }}>About Me</Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutMe;
