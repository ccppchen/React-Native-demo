import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	PixelRatio,
} from 'react-native';
class Header extends React.Component {
    render() {
        return (
				<View>
					<View style={styles.heights}></View>
        			<View style={styles.flex}>
	        			<View style={styles.left}>
							<Text style={styles.spaceFont}>left</Text>
						</View>
		        		<View>
		        			<Text style={styles.font}>
		        				<Text>{this.props.title}</Text>
		        			</Text>
		        		</View>
	        			<View style={styles.right}>
							<Text style={styles.spaceFont}>right</Text>
						</View>
	        		</View>
				</View>
        )
    }
}

const styles = StyleSheet.create({
	flex: {
		height: 44,
		borderBottomWidth: 1/PixelRatio.get(),
		borderBottomColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	heights: {
		height: 25,
		backgroundColor: '#F5FCFF',
	},
	font: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	left: {
		position: 'absolute',
		left: 10,
		top: 14,
	},
	right: {
		position: 'absolute',
		right: 10,
		top: 14,
	},
	spaceFont: {
		fontSize: 16,
	}
});

module.exports = Header;
