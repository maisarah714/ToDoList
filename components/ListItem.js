import { row } from 'mathjs';
import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	YellowBox,
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function ListItem({item, checkItem}) {
	return (
		<TouchableOpacity onPress={() => checkItem(item.id)}>
			<View style={style.itemListBox}>
              <Icon name='trash'size={18} color='white'/>
              <Text style={style.text} >{item.item} 
			  {/* {item.id} */}
			  </Text>
			</View>
              
		</TouchableOpacity>
	)
}

const style = StyleSheet.create({
	itemListBox: {
		backgroundColor: "orange",
		flexDirection: "row",
		alignItems: "flex-start",
		padding:15,
		margin: 15,
		marginBottom: 5,
	},
	text:{
		color: "white",
		fontFamily: "Roboto",
		fontSize: 16, 
		marginLeft: 15,
	  },
  
  });
  