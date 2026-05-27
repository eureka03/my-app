import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({title,isSignIn, handlePress}){
    return(
        <Pressable onPress={handlePress} style={[isSignIn?styles.signInButtonText:styles.signUpButtonText,styles.button] }>
            <Text >{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        width:100,
        backgroundColor:'#fff987',
        padding:10,
        borderRadius:5,
        alignItems:'center',
        marginTop:20

    },
    signUpbuttonText:{
        color:'white',

    },
    signInButtonText:{
        color:'pink'
    }

})