import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = (route) => {

    const { id } = route.params;

    return (
        <View>
            <Text>His age is {age}</Text>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})