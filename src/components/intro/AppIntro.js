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
    },
    textStyle: {
      color: 'rgba(255, 255, 255, 1)'
    },
    titleStyle: {
      color: 'rgba(255, 255, 255, 1)'
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
      titleStyle: styles.titleStyle,
      textStyle: styles.textStyle
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      //image: require('./assets/2.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#febe29',
      titleStyle: styles.titleStyle,
      textStyle: styles.textStyle
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      //image: require('./assets/3.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#22bcb5',
      titleStyle: styles.titleStyle,
      textStyle: styles.textStyle
    }
  ];
  

class AppIntro extends Component {

    static navigationOptions = {
        header: null,
      };
    

    state = {
        showRealApp: false
      };

      componentWillMount() {
        // what language to display? well take a look at your db entry

      }

      onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
        this.props.navigation.state.params.onNavigateBack();
        // or navigate him to the real app
        this.props.navigation.navigate('Home');
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
                
            />
        );
      }
}

export default AppIntro;