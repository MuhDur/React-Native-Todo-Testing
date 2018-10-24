import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { Button, H2 } from 'native-base';
import { withNavigation } from 'react-navigation';
//import UserInfo from '../schemas/Schema';
import AppIntro from './AppIntro';

const UserInfo = {
    name: 'userinfo',
    properties: {
      language:  'string',
      languageChosen: 'string'       // as in 'yes' or 'no'
      //model: 'string',
      //miles: {type: 'int', default: 0},
    }
  };

class LanguageSelect extends Component {

    constructor(props) { 
        super(props); 
        this.state = { 
            language: "Deutsch" 
        };
    }

    componentWillMount() {
      
    }

    handleConfirm = () => {
        
        Realm.open({
            schema: [UserInfo]
          }).then(realm => {
              
            realm.write(() => {
              const john = realm.create('userinfo', {language: this.state.language, languageChosen: 'true'});
            });
            this.setState({ realm });
          });

          
          this.props.navigation.navigate('Intro', { onNavigateBack: this.props.rerender });

          // zur AppIntro Seite schicken
    }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <H2>{this.state.language === "Deutsch" && "Willkommen!" || this.state.language === "Bosanski" && "Dobro Dosli!" || this.state.language === "English" && "Welcome!"}</H2>
        <Picker
            selectedValue={this.state.language}
            style={{ height: 70, width: 200 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
        >
            <Picker.Item label="Deutsch" value="Deutsch" />
            <Picker.Item label="Bosanski" value="Bosanski" />
            <Picker.Item label="English" value="English" />
        </Picker>

        <Button onPress={this.handleConfirm} style={{ width: 200, justifyContent: 'center', backgroundColor: 'rgba(77, 204, 189, 0.7)' }}>
            <Text style={{ color: 'black', fontSize: 17 }}>{this.state.language === "Deutsch" && "Bestätigen" || this.state.language === "Bosanski" && "Primi" || this.state.language === "English" && "Confirm"}</Text>
        </Button>
      </View>
    )
  }
}

export default withNavigation(LanguageSelect);