import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import { CalendarList, Agenda } from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let lol = ['2022-06-03', '2022-06-04'];

const dates = {
    date: {marked: true, dotColor: 'green' }
}

const getDates = () => {
    for (let element of lol) {
        dates.date = element;
        console.log(dates);
    }
}

const Calendar = ({navigation}) => {
  return (
    <CalendarList
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate='2022-05-01'
    // Max amount of months allowed to scroll to the past. Default = 50
    pastScrollRange={6}
    // Max amount of months allowed to scroll to the future. Default = 50
    futureScrollRange={10}
    // Enable or disable scrolling of calendar list
    scrollEnabled={true}
    // Enable or disable vertical scroll indicator. Default = false
    showScrollIndicator={false}
    // If firstDay=1 week starts from Monday.
    firstDay={1}
    // Collection of dates that have to be marked. Default = {}
    markedDates={getDates()}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={() => { navigation.navigate('Product') }}
    />
  )
}

export default Calendar

const styles = StyleSheet.create({})