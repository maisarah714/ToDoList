import React from 'react';
import {
	StyleSheet,
	Text,
	View,
  } from 'react-native';

export default function Header() {
		return (
			<View style={style.header}>
				<Text style={style.headerText} >To Do List</Text>
			</View>
		)
}




const style = StyleSheet.create({
	header: {
	  backgroundColor: "orange",
	  height: 50,
	  alignItems: "center",
	  width:"100%",
	  paddingTop: 10,
	},
	headerText: {
	  fontFamily: "Roboto",
	  color: "white",
	  fontSize: 20, 
	  fontWeight: "bold",
	},
  
  });
