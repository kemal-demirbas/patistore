/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Dimensions
} from 'react-native';
import dataList from './veriler.json';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */



const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.title}>PATIKASTORE</Text></View>
      <View style={styles.textInputContainer}>
        <TextInput placeholder='Ara...'>
        </TextInput>

      </View>
    
        <FlatList
        numColumns='2'
          data={dataList}
          renderItem={({ item, index }) =>
            <ScrollView style={styles.conta}>
              <Image style={styles.image} source={{ uri: item.imgURL }} />
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </ScrollView>}
        />
   



    </SafeAreaView>
  );
};



const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    flex:4
  },
  title: {
    fontSize: 20,
    color: 'pink',
    fontWeight: 'bold',
    marginHorizontal: 24,
    marginBottom: 10
  },
  input: {
    backgroundColor: 'gray',
  },
  textInputContainer: {
    marginHorizontal: 24,
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 5
  },
  conta: {
    backgroundColor: 'white'
  },
  image:{
    height: Dimensions.get('window').height /3,
    width: Dimensions.get('window').width /2,
    borderRadius:5,
    paddingRight:5,
    marginRight:10,
    margin:10,
  }




});


export default App;
