import React from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingViewComponent, Image} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactsMenu = [
    {
        type: 'starred',
        name: 'Starred'
    },
    {
        type: 'contact',
        name: 'Ranbir',
        photo: require('../assets/ranbir.jpeg')
    },
    {
        type: 'contact',
        name: 'Aryan Khan',
        photo: require('../assets/aryan.jpeg')
    }
]

function ContactsMenu() {
    return (
        <View style = {styles.container}>
            {contactsMenu.map((contact, index)=>
                <View key={index} style = {styles.row}>
                    {contact.type == 'starred' ? (
                        <View style = {styles.starIcon}>
                            <AntDesign name='star' size={30} color='#efefef'/>
                        </View>) : 
                        (
                            <Image source = {contact.photo} style = {styles.image} />
                        )

                    }
                    
                    <Text style = {styles.text}>
                        {contact.name}
                    </Text>
                </View>
            )}
         </View> 
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    container: {

    },
    text: {
        color: 'white',
        paddingLeft: 15,
        fontSize: 18,

    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
        
    },
    starIcon: {
        backgroundColor: '#333333',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    image: {
        height: 55,
        width: 55,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})