import React, {useState} from 'react';
import {
	StyleSheet,
	TextInput,
	Button,
	View,
  } from 'react-native';

export default function AddItem( {addItem} ) {

	const [text, setText] = useState();
	return (
		<View>
          <TextInput placeholder="Enter Item Name" style={style.input} onChangeText={setText} value={text} required/>
          <Button title="Add New Item" color="orange" onPress={() => addItem(text)} />
        </View>
	)
}

const style = StyleSheet.create({
	input:{
	  height: 50,
	  margin: 15,
	  borderWidth: 1,
	  borderColor: "grey",
	  padding: 15,
	},
  
  });
  