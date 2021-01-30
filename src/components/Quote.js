import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';


export const Quote = ({quote, author, tags, uri }) => (

    <View style={{
        padding: 20,
        width: '100%',
        justifyContent: 'center',
    }}>

        <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold', marginBottom: 30, textAlign: 'center'}}>
            "{quote}"
        </Text>

        <Text style={{ alignSelf: 'center', fontSize: 20, marginBottom: 30, textAlign: 'center' }}>
            - {author}
        </Text>

        <Text style={{ alignSelf: 'center', fontSize: 16 , textAlign: 'center' }}>
            Tags: {tags}
        </Text >

        <Text style={{ alignSelf: 'center', fontSize: 16, marginBottom: 30, color: 'blue', textAlign: 'center' }}
            onPress={() => Linking.openURL(String(uri))}>
            See online

        </Text>
    </View>
);

export const FavoriteQuote = ({body, author, tags, uri }) => (
    <View style={{
        borderBottomWidth: 1,
        borderColor: 'black'
    }}>
        <View style={{
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 15
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>"{body}"</Text>

            <View style={{ padding: 10 }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between"
                }}>
                    <Text style={{ alignSelf: 'center', fontSize: 14, textAlign: 'center' }}>
                        - {author}
                    </Text>

                    <Text style={{ alignSelf: 'center', fontSize: 14, textAlign: 'center' }}>
                        {tags.map((prop, key) => {
                            return (
                                <Text key={prop}>#{prop} </Text>
                            );
                        })}
                    </Text >

                    <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', backgroundColor: '#A0C6F6', padding: 3, paddingLeft: 6, paddingRight: 6, borderWidth: 1 }}
                        onPress={() => Linking.openURL(String(uri))}>
                        More
                    </Text>

                </View>
            </View>



        </View>
    </View>


);