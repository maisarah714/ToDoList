
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { randomInt } from 'mathjs';

import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

export default function App(){
  const dataList = [
    {
      id: 1,
      item: "Wash Dishes",
    },
    {
      id: 2,
      item: "Clean Shoes",
    },
    {
      id: 3,
      item: "Water Plants",
    },
    {
      id: 4,
      item: "Light Candle",
    },
  ];

  const [data, setDataList] = useState(dataList);
  // let [count, setCountID] = useState(4);

  const checkItem = id => {
    setDataList(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = itemName => {

    if(itemName == null){
      Alert.alert("Error", "Item name cannot be empty!", [{
        text: "OK!",
      }]);
    }
    else{
      setDataList(prevItems => {
        return [...prevItems, {id: randomInt(0,1000), item: itemName} ]
      });
      // setText("");
      // setCountID(++count);

    }

  };

  
    return(
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }} >
        <View>
          <Header />
          <AddItem addItem={addItem} />

          <View>
            <FlatList style={style.flatlist} data={data} renderItem={ ({item}) => (
              <ListItem item={item} checkItem={checkItem}/>
            ) }/>
          </View>
        </View>
      </TouchableWithoutFeedback>

    );
}

const style = StyleSheet.create({
	flatlist: {
	  marginBottom: 350,
	},
  
  });
  
