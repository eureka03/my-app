import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function Home(){

    const handleLogin = () => {
        router.push('/login');
    }
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
            </View>
            <View style={styles.Textcontainer}>
                <Text style={styles.welcomeMessage}>Welcome</Text>
                <Pressable style={styles.button} onPress={handleLogin}><Text style={styles.buttonText}>Sign In</Text></Pressable>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create = ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    button :{
        width:100,
        backgroundColor:'#ff0ff8',
        padding:10,
        borderRadius:5,
        alignItems:'center',
        marginTop:20,
        marginLeft:160

    },
    buttonText:{
        color:'white',

    },
    headerContainer:{
        backgroundColor:'#ff7093',
        height:470,
        width:415
    },
    welcomeMessage:{
        fontSize:40,
        fontWeight:'bold',
        color:'#ff7093',
        textAlign:'center',
        marginTop:200

    },

    Textcontainer: {
        width:415,
        height:470
    }

    
});