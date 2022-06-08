import react from 'react';
import { CalendarList } from 'react-native-calendars';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

const day = () => {
  return (
    <Text>Hello</Text>
  )
}

export default function App() {
  return (
    <SafeAreaView>
      <CalendarList
        day={day}

        minDate='2022-05-01'
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={false}

        horizontal={true}

        calendarWidth={320}
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
