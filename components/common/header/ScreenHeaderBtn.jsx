import React, { useRef } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import Animated, { withTiming, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import styles from './screenheader.style';

const ScreenHeaderBtn = ({ iconURL, dimension, handlePress, menuItems }) => {
  const menuHeight = menuItems.length * 40; // Assuming each menu item has a height of 40
  const animationValue = useSharedValue(0);

  const animatedMenuStyle = useAnimatedStyle(() => {
    return {
      height: animationValue.value,
    };
  });

  const toggleMenu = () => {
    if (animationValue.value === 0) {
      animationValue.value = withTiming(menuHeight, { duration: 250 });
    } else {
      animationValue.value = withTiming(0, { duration: 250 });
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.btnContainer} onPress={toggleMenu}>
        <Image source={iconURL} resizeMode="cover" style={styles.btnImg(dimension)} />
      </TouchableOpacity>
      <Animated.View style={[styles.menuContainer, animatedMenuStyle]}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => handlePress(item)}>
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </>
  );
};

export default ScreenHeaderBtn;
