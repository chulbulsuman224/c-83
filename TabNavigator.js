import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../Screens/Feed'
import CreateStory from '../Screens/CreateStory'

const Tab=createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomtabstyle}
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                if(route.name==='Feed'){
                    iconName=focused?'book':'book-outline'
                }
                else if(route.name==='CreateStory'){
                    iconName=focused?'create':'create-outline'
                }
                return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons}/>
            }
        })}
        tabBarOption={{activeTintColor:'tomato',inactiveTintColor:'gray'}}>
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="CreateStory" component={CreateStory}/>
        </Tab.Navigator>
    )
} 
export default BottomTabNavigator;
const styles=StyleSheet.create({
    bottomtabstyle:{
        backgroundColor:'#2f345d',
        height:'8%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        overflow:'hidden',
        position:'absolute'
    },
    icons:{
        width:RFValue(30),
        height:RFValue(30)
    }
})

