import React from 'react';

import axios from 'axios';

import {
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  TextInput,
  Text
} from 'react-native';

import { API_URL } from '../config/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    height: 40,
    borderRadius: 5,
  },
  contact: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
  },
  contactName: {
    color: '#444',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 20,
    width: 50,
    height: 50,
    elevation: 2,
  },
  fab: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  fabWrapper: {
    backgroundColor: '#2196F3',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabIcon: {
    fontSize: 25,
    color: '#fff',
  }
});

class Home extends React.Component {
  static navigationOptions = {
    title: 'Contactos',
  }

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      contacts: [],
    }
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts = () => {
    axios({
      method: 'GET',
      url: API_URL + '/api/contacts',
      headers: {
        'Api-Key': '1717820185',//'Api-Key': '1720074127',
      },
    }).then((response) => {
        console.log(response);
        this.setState({ contacts: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const contacts = this.state.contacts
      .filter(contact => {
        if (contact.firstName.indexOf(this.state.searchText) > -1) {
          return true;
        }
        if (contact.lastName.indexOf(this.state.searchText) > -1) {
          return true;
        }
        return false;
      })

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}> 
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Buscar"
            style={styles.input}
            value={this.state.searchText}
            underlineColorAndroid="transparent"
            onChangeText={(searchText) => this.setState({ searchText })}
          />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={contacts}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <View style={styles.contact}>
                <Text style={styles.contactName}>{item.firstName} {item.lastName}</Text>
                <Text style={styles.contactPhone}>{item.phone}</Text>
              </View>
            )}
          />
          <View style={styles.fabContainer}>
            <TouchableHighlight
              style={styles.fab}
              onPress={() => navigate('Form', { getContacts: this.getContacts })}
            >
              <View style={styles.fabWrapper}>
                <Text style={styles.fabIcon}>+</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;