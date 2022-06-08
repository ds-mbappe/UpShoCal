import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Home = () => {

    const [searchValue, setSearchValue] = useState('');

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Image style={styles.userPicture} source={require()} />
                    <View style={styles.msg}>
                        <Text style={styles.welcomeMsg}>Welcome</Text>
                        <Text style={styles.userName}>Name</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})