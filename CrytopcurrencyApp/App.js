import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [apiData, setApiData] = useState(data);

  useEffect(() => {
    async function fetchData(){
      const data = await fetch('https://api.coinmarketcap.com/vl/ticker/?limit=10');
      const res = await data.json();
      setApiData = (res);
      console.log('res', res);
    }
    fetchData();
  });

  //https://api.coinmarketcap.com/vl/ticker/?limit=10 API

  const renderItem = (item) => {
    return (
      <View>
        <Text>Symbol: {item.symbol}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Name: {item.name}</Text>
      </View>

    );
  }

  return (
    <View style={styles.container}>
      <Text>Workshop @FotonTech @EJEC</Text>
      <FlatList 
        data={apiData}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
