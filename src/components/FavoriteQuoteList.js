import React from "react";
import { View, FlatList } from 'react-native';
import {FavoriteQuote} from '../components/Quote';


const FavoriteQuoteList = ({ favoritesList }) => (

  <View style={{ flex: 1 }}>
    <FlatList
      data={favoritesList}
      renderItem={({ item }) => (
        <FavoriteQuote
          body={item.body}
          author={item.author}
          tags={item.tags}
          uri={item.uri}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />

  </View>
);

export default FavoriteQuoteList;