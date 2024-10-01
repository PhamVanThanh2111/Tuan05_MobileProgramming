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
          <Text style={styles.textInfo}>
            Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng
          </Text>
        </View>
      </View>
      <View style={styles.colorContainer}>
        <View style={{ flex: 0.5 }}>
          <Text style={{ marginHorizontal: 10, fontFamily: 'Roboto', fontWeight: 400, fontSize: 18, marginTop: 10}}>Chọn một màu bên dưới:</Text>
        </View>
        <View
          style={{
            flex: 6,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            rowGap: 10,
          }}>
          <TouchableOpacity
            style={{
              width: 85,
              height: 85,
              backgroundColor: '#C5F1FB',
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              height: 85,
              backgroundColor: '#F30D0D',
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              height: 85,
              backgroundColor: '#000000',
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 85,
              height: 85,
              backgroundColor: '#234896',
            }}></TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>XONG</Text>
            </TouchableOpacity>
          </View>
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
    flex: 2,
    flexDirection: 'row',
    gap: 12,
  },
  img: { width: 112, height: 132 },
  textInfo: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 18,
    fontFamily: 'Roboto',
  },
  colorContainer: {
    flex: 8,
    backgroundColor: '#C4C4C4',
    width: '100%',
    display: 'flex',
    height: 400,
  },
  btn: {
    backgroundColor: '#1952E294',
    width: 330,
    height: 45,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
  },
  btnText: {
    lineHeight: 45,
    textAlign: 'center',
    color: 'white',
    fontWeight: 700,
    fontFamily: 'Roboto',
    fontSize: 20,
  },
});

export default Screen02;
