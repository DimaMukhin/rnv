import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';

import SampleVideo from '../../resources/SampleVideo.mp4';
import LightsVideo from '../../resources/lights.mp4';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          repeat
          source={LightsVideo}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});