import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function StartMeeting({name, roomId, setName, setRoomId, joinRoom}) {
    return (
        <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput 
                        style={styles.textInput}
                        value={name}
                        onChangeText = {text => setName(text)}
                        placeholder='Enter Name'
                        placeholderTextColor='#767476'/>
                </View>
                <View style={styles.info}>
                <TextInput 
                        style={styles.textInput}
                        value={roomId}
                        onChangeText = {text => setRoomId(text)}
                        placeholder='Enter Room ID'
                        placeholderTextColor='#767476'/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                        style={styles.startMeetingButton}
                        onPress = {() =>joinRoom()}>
                            <Text style = {{color: "white", fontWeight: "bold", fontSize: 18}}>
                                Start Meeting
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default StartMeeting

const styles = StyleSheet.create({
    
    info: {
        width: "100%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#484648",
        padding: 12,
        justifyContent: 'center'
    },
    textInput: {
        color: 'white',
        fontSize: 18
    },
    startMeetingButton: {
        width: 350,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0470DC",
        height: 50,
        borderRadius: 15,

    }
})
