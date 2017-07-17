import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    padding: 40,
  },
  logo: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain'
  },
  welcome: {
    paddingVertical: 10,
  },
  message: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
  btn: {
    padding: 20,
  }
});

class Start extends React.Component {
  static navigationOptions = {
    title: 'Inicio',
    header: null,
  }

  render() {
    console.log(this.props);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
           <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
          <View style={styles.welcome}>
            <Text style={styles.message}>BIENVENIDO</Text>
          </View>
        </View>
        <Button
          onPress={() => navigate('Home')}
          style={styles.btn}
          title="EMPEZAR"
        />
      </View>
    );
  }
}

export default Start;