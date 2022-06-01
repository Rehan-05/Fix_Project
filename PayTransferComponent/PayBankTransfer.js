import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Headers from './Header';
import Slider from './Slider';
import Row from './Row';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function PayBankTransfer() {
  const navigation = useNavigation();
  const [tab, setTab] = React.useState(0);
  return (
    <View style={styles.container}>
      <Headers onPress={()=>navigation.goBack()} title="Make Payment" />
      <View style={{backgroundColor:"#FFFBFB",marginTop:20}}><Slider currentTab={0} />

  
      <Text
        style={styles.TransectionIdText}>
        N5, 650
      </Text>
      <Text style={styles.Description}>
      Please make a bank transfer to the {'\n'}account below
      </Text>

      <Row title='Amount' value='N5,650' valueBold={true} />
      <Row title='Account Name' value='Fixlancer Markeetplace' />
      <Row title='Account Number' value='023989172' />
      <Row title='Bank Name' value='United Bank of Africa' mH={0} />

</View>
      <TouchableHighlight style={styles.BtnContainer} underlayColor={'#1CC88A'} onPress={() => navigation.navigate('PlacOrder')}>
          <Text style={styles.btnText}>
              Continue
          </Text>
      </TouchableHighlight>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  TransectionIdText:{
    fontFamily: 'Nunito-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    color: '#343434',
    marginVertical:10
  },
  Description:{
    fontFamily: 'Nunito-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: -0.24,
    color: "#343434",
    marginTop: 20,
    marginBottom:30
},
BtnContainer:{
    width:"90%",
    marginHorizontal:20,
    marginTop:26,
    borderRadius:8,
    backgroundColor:"#1CC88A",
   height:60,
   alignSelf:'center' ,
   justifyContent:'center',
      alignItems:'center',
},
btnText:{
    fontFamily: 'Nunito-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
    /* identical to box height, or 129% */
    
    textAlign: "center",
    letterSpacing: -0.408,
    color:"#ffff"
}
});
