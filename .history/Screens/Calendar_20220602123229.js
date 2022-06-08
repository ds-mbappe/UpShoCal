import React from 'react'
import XDate from 'xdate';
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import { CalendarList, Agenda } from 'react-native-calendars';

const date = {
    '2022-06-05': { marked: true },
}

const shoe = {
    name: 'hello',
    age: 10,
    releaseDate: date 
}

const Calendar = ({navigation}) => {
    return (
        <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={{
            '2022-06-02': [{name: 'item 1 - any js object'}],
            '2022-06-03': [{name: 'item 2 - any js object', height: 80}],
            '2022-06-04': [],
        }}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-06-01'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={6}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={12}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
            return (<Text>Hello</Text>);
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderDay={(day, item) => {
            return (<Text>Hello</Text>);
        }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
            return <View />;
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
            return <View />;
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
            return <View />;
        }}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
        }}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        showClosingKnob={true}
        // Agenda container style
        style={{}}
        />
  )
}

export default Calendar

const styles = StyleSheet.create({})