import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
      width: 320,
      height: 320,
    }
  });
  
  const slides = [
    {
      key: 'somethun',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      //image: require('./assets/1.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      //image: require('./assets/2.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      //image: require('./assets/3.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#22bcb5',
    }
  ];
  

class AppIntro extends Component {

    static navigationOptions = {
        header: null,
      };
    

    state = {
        showRealApp: false
      };

      onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
      }

      _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-arrow-round-forward"
              color="rgba(255, 255, 255, .9)"
              size={24}
              style={{ backgroundColor: 'transparent' }}
            />
          </View>
        );
      }
      _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-checkmark"
              color="rgba(255, 255, 255, .9)"
              size={24}
              style={{ backgroundColor: 'transparent' }}
            />
          </View>
        );
      }

      render() {
        return (
            <AppIntroSlider 
                slides={slides} 
                onDone={this.onDone}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                titleStyle={{ color: 'black' }}
                textStyle={{ color: 'black' }}
            />
        );
      }
}

export default AppIntro;