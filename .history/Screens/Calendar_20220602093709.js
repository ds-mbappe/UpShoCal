import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import { CalendarList, Agenda } from 'react-native-calendars';

const dates = {
    '2022-06-02': {marked: true},
    '2022-06-03': {marked: true, dotColor: 'green'},
    '2022-06-04': {marked: true, dotColor: 'red'}
  }

const Calendar = () => {
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

    markedDates={dates}
    />
  )
}

export default Calendar

const styles = StyleSheet.create({})