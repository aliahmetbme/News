import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({

    container:{
        backgroundColor: "white",
        margin:10,
        borderRadius:10
    },
    imageStyle:{
       height:Dimensions.get("window").height / 4,
       borderTopLeftRadius:10,
       borderTopRightRadius:10,
       
    },
    title:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
        
    },
    description:{
        fontSize:15,
        paddingTop:10,
    },
    innerContainer:{
        padding:10
    },
    author:{
        fontStyle:'italic',
        fontWeight:'700',
        textAlign:'right',
        paddingTop:5,
        color:'black'
    }
})