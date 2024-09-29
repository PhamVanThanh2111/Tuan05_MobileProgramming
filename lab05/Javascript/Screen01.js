import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen01 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgPhoneContainer}>
        <Image source={require('../Images/vs_blue.png')} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.name}>
          <Text style={styles.namePhone}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
        <View style={styles.rate}>
          <View style={styles.rateBar}>
            <Image style={styles.star} source={require('../Images/star.png')} />
            <Image style={styles.star} source={require('../Images/star.png')} />
            <Image style={styles.star} source={require('../Images/star.png')} />
            <Image style={styles.star} source={require('../Images/star.png')} />
            <Image style={styles.star} source={require('../Images/star.png')} />
          </View>
          <View style={styles.rateQuantity}>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceGiam}>1.790.000 đ</Text>
          <Text style={styles.priceGoc}>1.790.000 đ</Text>
        </View>
        <View style={styles.attend}>
          <View>
            <Text style={styles.attendText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          </View>
          <View>
            <Image
              style={styles.questionImg}
              source={require('../Images/question.png')}
            />
          </View>
        </View>
        <View style={styles.chooseColor}>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.btnContent}>
              <Text style={styles.btnText}>4 MÀU-CHỌN MÀU</Text>
              <Text style={styles.btnTextArrow}>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnMua}>
          <Text style={styles.btnTextMua}>CHỌN MUA</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginBottom: 6,
  },
  imgPhoneContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 3.5,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 6,
  },
  name: { marginLeft: 12 },
  namePhone: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 18,
    fontFamily: 'Roboto',
  },
  rate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
    paddingHorizontal: 12,
  },
  rateBar: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 1,
    alignItems: 'center',
  },
  rateQuantity: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 18,
    fontFamily: 'Roboto',
  },
  star: { width: 23, height: 25 },
  price: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    columnGap: 50,
  },
  priceGiam: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 21,
    fontFamily: 'Roboto',
  },
  priceGoc: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 21,
    fontFamily: 'Roboto',
    color: '#00000094',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  attend: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  questionImg: { width: 20, height: 20 },
  attendText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 14,
    color: '#FA0000',
  },
  btn: {
    width: 310,
    height: 34,
    backgroundColor: '#C4C4C400',
    borderBlockColor: '#00000075',
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 8,
  },
  btnText: {
    lineHeight: 34,
    textAlign: 'center',
    fontFamily: 'Roboto',
    flex: 1,
    width: '100%',
  },
  btnTextArrow: {
    lineHeight: 34,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  btnContainer: { flex: 1, paddingHorizontal: 12 },
  btnMua: {
    backgroundColor: '#EE0A0A',
    width: 310,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CA1536',
  },
  btnTextMua: {
    color: '#F9F2F2',
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Roboto',
    lineHeight: 45,
    textAlign: 'center',
  },
  chooseColor: { paddingHorizontal: 12 },
});

export default Screen01;
