import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = (route) => {

    const age = route.params;

    return (
        <View>
            <Text>His age is { age }</Text>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})