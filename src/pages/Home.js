import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Home extends Component{
	render(){
		return (
			<View style={styles.mycontainer}>
			    <Text>This is the Home Page</Text>
			</View>
		)

	}
}
export default Home;
const styles=StyleSheet.create({
	mycontainer: {
		fontSize: 90,
		color: '#ffffff'
	}
});
