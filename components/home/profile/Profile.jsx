import React, { useState, useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';

const Profile = ({ profilePic }) => {
  const screenWidth = Dimensions.get('window').width;
  const [imageWidth, setImageWidth] = useState(Math.max(screenWidth * 0.3, 200));
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    Image.getSize(profilePic, (width, height) => {
      const aspectRatio = width / height;
      setImageHeight(imageWidth / aspectRatio);
    });
  }, [profilePic, imageWidth]);

  return (
    <View>
      <Image
        source={profilePic}
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Profile;
