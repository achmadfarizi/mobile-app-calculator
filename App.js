
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import ButtonApp from './component/ButtonApp';
import ButtonApp2 from './component/ButtonApp2';
import ButtonApp3 from './component/ButtonApp3';
import React, { useState } from 'react';
export default function App() {
  const [btn,setBtn] = useState('0')
  const [them,setThem] = useState(false)
  const mode = them===false ? styles.DaskMode:styles.LightMode
  const TextColor =them===false ? styles.TextLight:styles.TextDask
  const Display = (value) =>{
    if(btn==='0'){
      if(value!=='C'&&value!=='DEL'&&value!=='='&&value!=='%'&&value!==
      '/'&&value!=='X'&&value!=='-'&&value!=='+'){
        setBtn(value)
      }             
    }else{
      switch (value) {
        case 'X':
          setBtn(btn +'*')
          return
        case '=':
          let result = eval(btn).toString();
          setBtn(result)
          return
        case 'C':
          setBtn('0')
          return
          case 'DEL':
            setBtn(btn.substring(0, (btn.length - 1)))
            if(btn.length===1){
              setBtn('0')
            }
            return
        default:
          setBtn(btn+value)
          return
      }
    }
    
  }
  return (
    <View style={[styles.container,mode]}>
      <TouchableOpacity style={styles.image}
        onPress={() =>{
          them ? setThem(false):setThem(true)
        }}
        >
          {
            them===true ?
               <Image style={{width:35,height:35,borderRadius:44}} source={require('./image/daskMode.jpg')} />
               :
               <Image style={{width:35,height:35,borderRadius:44}} source={require('./image/Sun.png')} />
          }
        </TouchableOpacity>
    <View style={styles.display}>
      <Text style={[styles.results,TextColor]}>{btn}</Text>
    </View>

    <View style={styles.keyboard}>
      <View style={styles.btnRow}>
        <ButtonApp onPress={()=>{Display("1")}} title="1"  />
        <ButtonApp onPress={()=>{Display("2")}}  title="2"  />
        <ButtonApp2 onPress={()=>{Display("-")}} title="-" />
        <ButtonApp2 onPress={()=>{Display("+")}} title="+" />
      </View>
      <View style={styles.btnRow}>
        <ButtonApp onPress={()=>{Display("3")}} title="3" />
        <ButtonApp onPress={()=>{Display("4")}} title="4"  />
        <ButtonApp2 onPress={()=>{Display("/")}} title="/" />
        <ButtonApp2 onPress={()=>{Display("X")}}  title="X" />
      </View>
      <View style={styles.btnRow}>
        <ButtonApp onPress={()=>{Display("5")}}  title="5"  />
        <ButtonApp onPress={()=>{Display("6")}} title="6" />
        <ButtonApp2 onPress={()=>{Display("%")}} title="%" />
        <ButtonApp2 onPress={()=>{Display("=")}} title="=" />
      </View>
      <View style={styles.btnRow}>
        <ButtonApp  onPress={()=>{Display("7")}}  title="7"  />
        <ButtonApp onPress={()=>{Display("8")}}    title="8"  />
        <ButtonApp onPress={()=>{Display("9")}}   title="9" />
        <ButtonApp onPress={()=>{Display("0")}} title="0"  />
      </View>
      <View style={styles.btnRow}>
        <ButtonApp3 onPress={()=>{Display("C")}} title="C"  />
        <ButtonApp3 onPress={()=>{Display("DEL")}}  title="DEL"  />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingHorizontal:25,
  },
  DaskMode:{
    backgroundColor:  '#050505',
  },
  LightMode:{
    backgroundColor:  '#E5E5E5',
  },
  display:{
    flex: 3,
    flexDirection:'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingRight: 22,
    marginBottom: 10,
  },
  results:{
    fontWeight:'bold',
    fontSize:40,
   
  },
  TextDask:{
    color:'black',
  },
  TextLight:{
    color: 'black',
  },
  keyboard:{
    flex: 7,
  },
  btnRow:{
    flexDirection:'row', 
    justifyContent:'space-between',
    paddingTop:10,
  },
  image:{
    flex: 1,
    paddingTop:25,
    marginTop: 15,
  },

});
