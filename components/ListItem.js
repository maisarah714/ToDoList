import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
  } from 'react-native';

export default function ListItem({item, checkItem}) {
	return (
		<TouchableOpacity onPress={() => checkItem(item.id)}>
              <Text style={style.itemListBox} >{item.item} 
			  {/* {item.id} */}
              {/* <Icon type="font-awesome" name="close" /> */}
              </Text>
              
		</TouchableOpacity>
	)
}

const style = StyleSheet.create({
	itemListBox: {
		backgroundColor: "orange",
		height: 75,
		alignItems: "center",
		paddingTop: 25,
		marginTop: 15,
		marginRight: 25,
		marginLeft: 25,
		fontFamily: "Roboto",
		color: "white",
		fontSize: 20, 
		paddingLeft: 15,
	  },
  
  });
  