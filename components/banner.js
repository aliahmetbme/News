import React from "react";
import { ScrollView, Text, View, Image, StyleSheet, Dimensions } from "react-native";
import news_banner_data from './news_banner_data.json'


function App() {
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(
                bannerNews => 
                <Image 
                    style={style.bannerImage} 
                    source={{uri : bannerNews.imageUrl}}
                    key={bannerNews.id}/>
              )
            }
        </ScrollView>
    )
}

const style = StyleSheet.create({
    bannerImage:{
        margin:10,
        height: Dimensions.get("window").height / 5,
        width: Dimensions.get("window").width / 2,
        borderRadius:5
    }
})

export default App;