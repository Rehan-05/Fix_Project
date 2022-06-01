import {View, Text, StyleSheet,TextInput,TouchableOpacity,TouchableHighlight,Image,ScrollView} from 'react-native';
import React from 'react';
import Headers from './Header';
import Slider from './Slider';
import Row from './Row';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';

export default function PlaceORder() {
  const navigation = useNavigation();
  const [tab, setTab] = React.useState(0);
  const reggex=/^\/[\w^\/\s\W]}{1,}.png*$/;
  const [formData,setFormData] = React.useState({ammount:'',accountName:'',file:[]});
  const GetImageFile=()=>{
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        mediaType:'photo',
        multiple: true,
      }).then(image => {
        console.log(image);
        setFormData({...formData,file:formData.file.concat(image)});
    
      }).catch(err=>{
          console.log(err)
      })
  }
  return (
    <View style={styles.container}>
      <Headers onPress={()=>navigation.goBack()} title="Place Order" />
      <Slider currentTab={1} />
      <Text style={styles.Description}>
      Please fill the form below so we can {'\n'}proccess your order
      </Text>

      <View style={styles.divider} />

    <TextInput value={formData.ammount} onChange={(text)=>setFormData({...formData,ammount:text})} style={styles.input} placeholder="Amount You Sent" />
    <TextInput value={formData.accountName} onChange={(text)=>setFormData({...formData,accountName:text})} style={styles.input} placeholder="Names As It appears on your account" />
      

   <View style={{marginHorizontal:20,flexDirection:'row',marginVertical:30,alignItems:'center',}} >
    <TouchableOpacity
    onPress={()=>GetImageFile()}
    style={{height:50,borderRadius:15,justifyContent:'center',alignItems:'center',flexDirection:'row',borderColor:"#C4C4C4",borderStyle:'solid',borderWidth:1,paddingHorizontal:20}}>
       <Text style={{
           fontFamily: 'Nunito-Bold',
           fontStyle: "normal",
           fontWeight: "700",
           fontSize: 16,
           lineHeight: 22,
           textAlign: "center",
           color: "#1E262F",
       }}>+ Attach File</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"58%"}}>
        <Text style={{fontFamily: 'Nunito-Regular',
           fontStyle: "normal",
           fontWeight: "400",
           fontSize: 14,
           lineHeight: 19,
           textAlign: "center",
           color: "#808080",marginLeft:10}}>
            {formData?.file?.uri?formData.file.type:"No Files Selected"}
        </Text>

        </View>
       
    </View>
    <View style={{maxHeight:100}}>
    {formData?.file.length>0&&
    <ScrollView>
    {formData.file.map(((item,index)=>(
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,alignItems:'center',marginHorizontal:20}}>
      <Text style={{fontFamily: 'Nunito-Regular',
         fontStyle: "normal",
         fontWeight: "400",
         fontSize: 14,

         lineHeight: 19,
         textAlign: "center",
         color: "#1E262F",marginLeft:10}}>
          {item.path.substr(item.path.lastIndexOf("/")+1)}
      </Text>
      <TouchableOpacity
      onPress={()=>setFormData({...formData,file:formData.file.filter((item,i)=>i!=index)})}
      ><Image 
      source={require('./Delete.png')}
      style={{height:20,width:16}}
      /></TouchableOpacity>

      </View>
    )))}
    </ScrollView>
    }
    </View>

      <TouchableHighlight style={styles.BtnContainer} underlayColor={'#1CC88A'}  onPress={() => navigation.navigate('SuccesScreen')}>
          <Text style={styles.btnText}>
              Place Order
          </Text>
      </TouchableHighlight>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
input:{
    marginHorizontal:20,
    marginVertical:10,
    fontSize:14,
    padding:10
    ,borderBottomColor:'#F0F0F0',
    borderBottomWidth:0.5
},
BtnContainer:{
    width:"90%",
    marginHorizontal:20,
    marginTop:20,
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
},
divider:{height:0,borderWidth:0.3,borderColor:"#F0F0F0",width:"100%",alignSelf:"center",marginTop:8,marginBottom:10}
});
