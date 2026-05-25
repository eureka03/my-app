import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function Login(){
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>Sign In</Text>
                <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input}></TextInput>

                </View>
                <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.input}></TextInput>

                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create = ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ff7093'
    },
    formContainer:{
        backgroundColor:'white',
        height:590,
        width:350,
        borderRadius:20,
        padding:25

    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        color:'#ff7093',
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
        borderBottomColor:'#ccc',
        borderBottomWidth:1
        
    }

})