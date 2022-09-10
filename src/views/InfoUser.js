import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useReducer } from 'react'

import {updateInfo} from '../redux/actions/updateAction'

import { useDispatch , useSelector } from 'react-redux';

const reducer = (state, action) => {
    switch (action.type){
      case 'UPDATE_NAME': 
        return {...state, name: action.value};
      case 'UPDATE_EMAIL': 
        return {...state, email: action.value};
      case 'UPDATE_SDT': 
        return {...state, sdt: action.value};
      case 'UPDATE_AGE': 
        return {...state, age: action.value};
      case 'UPDATE_ROLE': 
        return {...state, role: action.value};
      default:
        return state;
    }
}

const InfoUser = () => {

  const info = useSelector((state) => state.personalInfo);
  console.log(info);

  const [infoUser, dispatch] = useReducer(reducer, info);
  const dispatchAction = useDispatch();


  return (
    <View style={{marginLeft: 20, marginTop: 20}}>
      <Text style={{fontSize: 20, justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', color: 'black'}}>Hồ sơ khách hàng</Text>
      <View style={{flexDirection: 'row', marginTop: 50, alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>Name:</Text>
        <TextInput 
          style={{ width: '50%', borderBottomWidth: 0.5, marginLeft: 10, paddingBottom: -10}}
          value ={infoUser.name}
          onChangeText={(text) => {
            dispatch({ type: 'UPDATE_NAME', value: text })
          }}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>Email:</Text>
        <TextInput 
          style={{ width: '50%', borderBottomWidth: 0.5, marginLeft: 10, paddingBottom: -10}}
          value ={infoUser.email}
          onChangeText={(text) => {
            dispatch({ type: 'UPDATE_EMAIL', value: text })
          }}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>SĐT:</Text>
        <TextInput 
          style={{ width: '50%', borderBottomWidth: 0.5, marginLeft: 10, paddingBottom: -10}}
          value ={infoUser.sdt}
          onChangeText={(text) => {
            dispatch({ type: 'UPDATE_SDT', value: text })
          }}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>Age:</Text>
        <TextInput 
          style={{ width: '50%', borderBottomWidth: 0.5, marginLeft: 10, paddingBottom: -10}}
          value ={infoUser.age}
          onChangeText={(text) => {
            dispatch({ type: 'UPDATE_AGE', value: text })
          }}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>Role:</Text>
        <TextInput 
          style={{ width: '50%', borderBottomWidth: 0.5, marginLeft: 10, paddingBottom: -10}}
          value ={(infoUser.role).toString()}
          onChangeText={(text) => {
            dispatch({ type: 'UPDATE_ROLE', value: text })
          }}
        />
      </View>
      

      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 100}}>
        <TouchableOpacity 
          style={{ backgroundColor: 'pink', width: '40%', height: 50, alignItems: 'center', justifyContent: 'center',}}
          onPress = {() => 
            /* dispatchAction(updateInfo(
                                      infoUser.name, 
                                      infoUser.email, 
                                      infoUser.sdt, 
                                      infoUser.age, 
                                      infoUser.role)) */
              dispatchAction(updateInfo(infoUser))                     
          }
        >
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>Cập nhật</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 100}}>
        <TouchableOpacity 
          style={{ backgroundColor: 'pink', width: '40%', height: 50, alignItems: 'center', justifyContent: 'center',}}
        >
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>{info.name}</Text>
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>{info.email}</Text>
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>{info.sdt}</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default InfoUser

const styles = StyleSheet.create({})