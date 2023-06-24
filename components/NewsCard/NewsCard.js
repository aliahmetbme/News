import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import styles from "./NewCardsStylesheets"

const NewsCard = ({news}) => {
    
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.imageStyle} source={{uri:  news.imageUrl}}></Image>
            <View style={styles.innerContainer}>            
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.description}>{news.description}</Text>
                <Text style={styles.author}>{news.author}</Text>
            </View>

        </SafeAreaView>
    )
}

export default NewsCard;