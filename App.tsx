import { StatusBar } from 'expo-status-bar';
import { BackHandler, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AthanService from './services/AthanService';

type itemProps = {
  time: string
}

const Item = ({ time }: itemProps) => (
  <View>
    <Text>{time}</Text>
  </View>
);

export default function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    AthanService.getAthanTimes().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <View style={styles.all}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Athan App</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.body}>
        <View style={styles.mainRow}>
          <Text style={styles.leftText}>Fajr</Text>
          <Text style={styles.rightText}>{data.Fajr}</Text>
        </View>
        <View style={styles.mainRow}>
          <Text style={styles.leftText}>Dhuhr</Text>
          <Text style={styles.rightText}>{data.Dhuhr}</Text>
        </View>
        <View style={styles.mainRow}>
          <Text style={styles.leftText}>Asr</Text>
          <Text style={styles.rightText}>{data.Asr}</Text>
        </View>
        <View style={styles.mainRow}>
          <Text style={styles.leftText}>Maghrib</Text>
          <Text style={styles.rightText}>{data.Maghrib}</Text>
        </View>
        <View style={styles.mainRow}>
          <Text style={styles.leftText}>Isha</Text>
          <Text style={styles.rightText}>{data.Isha}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  body: {
    flex: 4,
    alignContent: 'center',
    backgroundColor: 'yellow',
  },
  leftText: {
    padding: 10,
    alignContent: 'flex-end',
    backgroundColor: 'white'
  },
  rightText: {
    padding: 10,
    alignContent: 'flex-end',
    backgroundColor: 'orange'
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent:'space-evenly' 
  }
});
