import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen02 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View>
          <Image style={styles.img} source={require('../Images/vs_blue.png')} />
        </View>
        <View>
        <Text style={styles.textInfo}>Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng</Text>
        </View>
      </View>
      <View style={styles.colorContainer}>
      <View>
      
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingVertical: 0,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  infoContainer: {
    flex: 2.5,
    flexDirection: 'row',
    gap: 12,
  },
  img: { width: 112, height: 132 },
  textInfo: {marginTop: 15, fontSize: 15, fontWeight: 400, lineHeight: 18, fontFamily: 'Roboto'},
  colorContainer: { flex: 8, backgroundColor: '#C4C4C4', width: '100%' },
});

export default Screen02;
