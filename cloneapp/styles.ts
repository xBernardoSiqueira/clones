import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent:"center",
       
 
    },
    logo:{
        
        marginBottom:"15%",        
    },
    imput:{
        width:"90%",
        height:40,
        backgroundColor:"#F4F3F3",
        marginBottom:20,
        padding:10,
        borderRadius: 5,
        borderColor:"#E0E0E0"
    },
    perdeuContainer:{
        width:"90%",
        alignItems:'flex-end'
    },
    perdeuText:{
        color:"#399fff"
        
    },
    loginButton:{
        marginTop:"5%",
        backgroundColor:"#399fff",
        width:"90%",
        height:40,
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 5
    },
    loginText:{
        color:"#fff",
        fontSize:20

    },
    facebookText:{
        color: "#399fff",
        paddingLeft:10,
        fontSize:15
        
    },
    facebookButton:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:"10%"

    },
    divisor:{
       marginTop:"10%",
       flexDirection:"row",
       width:"90%",
       alignItems: "center",
       justifyContent: "center"
               
    },
    divisorLinha:{
        width:"45%",
        height:2,
        backgroundColor:"#EFEDED",
        borderRadius:5    

    },
    divisorOU:{
        marginHorizontal: "3%"
    },
    cadastroContainer:{
        flexDirection:"row",
        marginTop:"10%",
    },
    cadastroText:{
        color:"#C4c4c4",
        paddingRight:10

    },
    cadastroButton:{
        color:"#399fff",
        fontWeight: "bold"


    },


});