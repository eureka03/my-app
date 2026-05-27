import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/button';


export default function Login(){

    const initialUser = {
        email:'',
        password:''
    }

    const [user,setUser] = useState(initialUser);

    const handleChange = (key,value) => {
        setUser({...user,[key]:value});
        console.log(key + value);
    }
    return (
        <View style={styles.container}>
                <Text style={styles.heading}>Sign In</Text>
                <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} value={user.email} onChangeText={(text)=>{handleChange('email',text)}}></TextInput>

                </View>
                <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.input} value={user.password} onChangeText={(text) => {handleChange('password',text)}}></TextInput>

                </View>
                <Button title={'Sign In'} isSignIn={false} />
                <Link href='#' style={styles.resetLink}>Forgot your password?</Link>
            
            
        </View>
    )
}

const styles = StyleSheet.create = ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    formContainer:{
        backgroundColor:'white',
        height:590,
        width:350,
        borderRadius:20,
        padding:25

    },
    resetLink:{
        color:'red'

    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:30
    },
    inputContainer:{
        width:300,
        height:50,
        borderRadius:5,
        paddingHorizontal:10,
        marginBottom:20
    },
    label:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,

    },
    input:{
        borderBottomColor:'green',
        borderBottomWidth:1
        
    }

})