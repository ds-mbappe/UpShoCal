import react from 'react';
import { CalendarList } from 'react-native-calendars';
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
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

        onDayPress={{selected: true}}

        markedDates={{
          '2022-06-02': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-06-03': {marked: true},
          '2022-06-04': {marked: true, dotColor: 'red'},
          '2022-06-05': {disabled: true, disableTouchEvent: true}
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
