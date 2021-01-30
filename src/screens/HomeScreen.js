import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

  

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{
                    flex: 1,
                    padding: 30,
                    width: '100%',
                    justifyContent: "flex-start",
                    backgroundColor: '#fff'
                }}>

                    <View style={{ width: '100%', paddingTop: 40 }}>
                        <TouchableOpacity
                            style={{
                                marginRight: 40,
                                marginLeft: 40,
                                marginTop: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                backgroundColor: '#105592',
                                borderWidth: 1,
                                borderColor: '#105592',
                                marginBottom: 40,
                                height: 80,
                                justifyContent: 'center'
                            }}
                            onPress={() => {
                                this.props.navigation.navigate('QuoteOfTheDayScreen')
                            }}
                            underlayColor='#fff'
                            width="100%">
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                                paddingLeft: 10,
                                paddingRight: 10,
                                fontSize: 20,
                            }}>Inspire Me!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '100%' }}>
                        <TouchableOpacity
                            style={{
                                marginRight: 40,
                                marginLeft: 40,
                                marginTop: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                backgroundColor: '#105592',
                                borderWidth: 1,
                                borderColor: '#105592',
                                height: 80,
                                justifyContent: 'center'
                            }}
                            onPress={() => {
                                this.props.navigation.navigate('FavoriteQuotesScreen')
                            }}
                            underlayColor='#fff'
                            width="100%">
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                                paddingLeft: 10,
                                paddingRight: 10,
                                fontSize: 20,
                            }}>Favorite Quotes</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        );
    }
}

export default HomeScreen;