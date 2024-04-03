import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import poop from '../assets/poop.jpg'
import Jerrod from '../assets/Jerrod.jpg'

const StoriesComponent = () => {
    return (
        <ScrollView horizontal style={Styles.ScrollStyle}>
            <Image source={poop} style={Styles.ImageStyle} />
            <Image source={Jerrod} style={Styles.ImageStyle} />
            <Image source={poop} style={Styles.ImageStyle} />
            <Image source={Jerrod} style={Styles.ImageStyle} />
            <Image source={poop} style={Styles.ImageStyle} />
            <Image source={Jerrod} style={Styles.ImageStyle} />
            <Image source={poop} style={Styles.ImageStyle} />
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    ImageStyle: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginRight: 20,
    },
    ScrollStyle: {
        paddingTop: 10,
        paddingBottom: 5,
    }
})

export default StoriesComponent