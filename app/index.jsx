import { router } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';


export default function Home(){

    const handleLogin = () => {
        router.push('/login');
    }
    return(
        <View style={styles.container}>
                <Image source={require('../assets/images/homepage.png')} resizeMode='contain' style={styles.image}/>
                <Text style={styles.welcomeMessage}>Welcome to EuEuStore!</Text>
                <Text>We Hope you enjoy your Shoping Experience</Text>
               <Button signIn={true} title={'Sign In'} handlePress={handleLogin}/>
            
        </View>
        
    )
}

const styles = StyleSheet.create = ({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
    },
    image:{
        width:180,
        height:200
    },
   
   
    welcomeMessage:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'

    }
});