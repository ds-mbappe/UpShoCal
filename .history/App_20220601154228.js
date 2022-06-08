import react from 'react';
import { CalendarList } from 'react-native-calendars';
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'column'}}>
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
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // If firstDay=1 week starts from Monday.
          firstDay={1}
        />
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{backgroundColor: 'lime'}}>
            <Text style={{fontSize: 42}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum..</Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
