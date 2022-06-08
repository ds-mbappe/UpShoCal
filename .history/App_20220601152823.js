import react from 'react';
import { CalendarList } from 'react-native-calendars';
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
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
        <ScrollView>
          <View style={styles.container}>
            <Text>Shoes description</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
