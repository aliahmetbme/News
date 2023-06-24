import React from "react";
import { Text, View, SafeAreaView , ScrollView, TouchableOpacity, FlatList, StyleSheet, Image, Dimensions } from "react-native";
import news_data from './news_data.json'
import NewsCard from "./components/NewsCard/NewsCard";
import BannerScroll from "./components/banner"


function App(){
  return(
    
    <SafeAreaView style={style.container}>
      <Text style={[style.headerText]}>News</Text>
      <FlatList 
            ListHeaderComponent={() => <BannerScroll/>}
            keyExtractor={(item) => item.u_id.toString()}
            data={news_data}
            renderItem={renderNews}
          />    
     </SafeAreaView>

  );
}

const renderNews = ({item}) =>  <NewsCard news={item}/> 

// normalde bu arrow funtuiın renderItem in içinde olduğu zaman her döngüde yeniden olşuturulur ve performans kaybı olur, 
//bu functionu u bir kere oluşturup her döngüde kullanılır.

const style = StyleSheet.create({
  container:{
    flex:1,
    flexGrow:1,
    backgroundColor:"#eceff1"
  },
  headerText:{
    fontSize:50,
    fontWeight:"bold",
    color:'black',
    paddingLeft:10,
    backgroundColor:'#DADADA'
  }
})

export default App;


/*
örnek kullanım

<FlatList 
  data={[1,2,3,4,5,6]}
  renderItem={(data) => <Text> {data.item} </Text>} />
  1
  2
  3
  4
  5
  6
*/