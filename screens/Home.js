import React from 'react'
import {View, SafeAreaView, StyleSheet} from 'react-native'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'

function Home({ navigation }) {
    return (
        <View style = {styles.container}>
            <SafeAreaView style={{height: '100%'}}>
                <Header/>
                { /*Header*/ }
                <SearchBar/>
                { /*SearchBar*/ }
                <MenuButtons navigation={navigation}/>
                { /*Menu Buttons*/ }
                <ContactsMenu/>
                { /* Contacts Menu*/}
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1c1c1c"
    }
})