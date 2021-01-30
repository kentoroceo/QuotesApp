import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Quote} from '../components/Quote';
import { AddToFavorites, GetQuoteInProgress, GetQuoteDone } from '../actions/QuoteActionCreator';
import { connect } from 'react-redux';
import { DotIndicator } from 'react-native-indicators';

function mapDispatchToProps(dispatch) {
    return {
        AddToFavorites: payload => dispatch(AddToFavorites(payload)),
        GetQuoteInProgress: () => dispatch(GetQuoteInProgress()),
        GetQuoteDone: () => dispatch(GetQuoteDone())
    };
}

const mapStateToProps = state => {
    return { loading: state.loading };
};

class QuoteOfTheDay extends Component {

    constructor(props) {

        super(props);

        this.state = {
            quote: {
                id: '',
                body: '',
                author: '',
                tags: '',
                uri: '',
            }
        }

        this.GetQuoteOfTheDay = this.GetQuoteOfTheDay.bind(this);
        this.GetQuoteOfTheDay();
    }

    GetQuoteOfTheDay() {
        this.props.GetQuoteInProgress();
        return fetch('https://favqs.com/api/qotd')
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.GetQuoteDone(responseJson.quote);
                this.setState((state) => {
                    let quote = Object.assign({}, state.quote);
                    quote.id = responseJson.quote.id;
                    return { quote };
                });
                this.setState((state) => {
                    let quote = Object.assign({}, state.quote);
                    quote.body = responseJson.quote.body;
                    return { quote };
                });
                this.setState((state) => {
                    let quote = Object.assign({}, state.quote);
                    quote.author = responseJson.quote.author;
                    return { quote };
                });
                this.setState((state) => {
                    let quote = Object.assign({}, state.quote);
                    quote.tags = responseJson.quote.tags;
                    return { quote };
                });
                this.setState((state) => {
                    let quote = Object.assign({}, state.quote);
                    quote.uri = responseJson.quote.url;
                    return { quote };
                });
                //return responseJson;
            })
            .catch((error) => {
                this.props.GetQuoteDone("Something Went Wrong!");
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                

                {this.props.loading ? <DotIndicator color='#105592' /> : <View style={{
                    flex: 1,
                    padding: 20,
                    width: '100%',
                    justifyContent: 'center'
                }}>
                    <Quote
                        id={this.state.id}
                        quote={this.state.quote.body}
                        author={this.state.quote.author}
                        tags={this.state.quote.tags}
                        uri={this.state.quote.uri}
                    ></Quote>

                    <View style={{ width: '100%' }}>
                        <TouchableOpacity
                            style={{
                                marginRight: 40,
                                marginLeft: 40,
                                marginTop: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                backgroundColor: '#97040C',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#97040C',
                                height: 80,
                                justifyContent: 'center'
                            }}
                            onPress={() => {
                                this.props.AddToFavorites(this.state.quote)
                            }}
                            underlayColor='#fff'
                            width="100%">
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                                paddingLeft: 10,
                                paddingRight: 10,
                                fontSize: 20
                            }}>Add to Favorites</Text>
                        </TouchableOpacity>
                    </View>
                </View>}

                



            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteOfTheDay);