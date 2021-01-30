import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FavoriteQuoteList from '../components/FavoriteQuoteList';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { favorites: state.favorites };
};

class FavoriteQuotes extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <View style={{ flex: 1 }}>
              

                <FavoriteQuoteList
                    favoritesList={this.props.favorites}
                >

                </FavoriteQuoteList>

            </View>

        );
    }
}

export default connect(mapStateToProps)(FavoriteQuotes);