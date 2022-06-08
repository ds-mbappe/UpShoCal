import react from 'react';
import { CalendarList } from 'react-native-calendars';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <CalendarList
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate='2022-05-01'
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={false}
        // Enable horizontal scrolling, default = false
        horizontal={true}

        firstDay={1}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
