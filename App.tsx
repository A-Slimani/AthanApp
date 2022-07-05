import { StatusBar } from 'expo-status-bar';
import { BackHandler, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AthanService from './services/AthanService';

type itemProps = {
  name: string
  time: string
}

const PrayerTime = ({ name, time }: itemProps) => {
  return (
    <View style={styles.component}>
      <View style={styles.leftText}>
        <Text>{name}</Text>
      </View>
      <View style={styles.rightText}>
        <Text>{time}</Text>
      </View>
    </View>
  )
}

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
        <PrayerTime name={'Fajr'} time={data.Fajr} />
        <PrayerTime name={'Dhuhr'} time={data.Dhuhr} />
        <PrayerTime name={'Asr'} time={data.Asr} />
        <PrayerTime name={'Maghrib'} time={data.Maghrib} />
        <PrayerTime name={'Isha'} time={data.Isha} />
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
    flex: 3,
    alignItems: 'center'
  },
  component: {
    flexDirection: 'row',
    width: 250,
    padding: 10,
    borderWidth: 1,
  },
  leftText: {
    width: 110,
    padding: 10,
    alignItems: 'flex-start'
  },
  rightText: {
    width: 110,
    padding: 10,
    alignItems: 'flex-end'
  }

});
