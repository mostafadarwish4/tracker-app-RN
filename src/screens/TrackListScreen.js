import React,{useContext, useEffect} from 'react'
import {Text, ActivityIndicator,Image,StyleSheet, Pressable, View} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Context as TrackContext} from '../context/trackContext'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ListItem } from 'react-native-elements';
import moment from 'moment'
const TrackListScreen=({navigation})=>{
    const {state,fetchTracks,deleteTrack}=useContext(TrackContext)
    //console.log(state)

    useEffect(()=>{
         navigation.addListener('focus',()=>{fetchTracks()}) 
     },[])
     if(!state.length>0){
         return <ActivityIndicator size='large' style={{paddingTop:200}}/>
     }else{
         return (
        <SafeAreaView style={{flex:1,backgroundColor:'#e6e1e1'}} >
             <FlatList data={state}
                      keyExtractor={item=>item._id}
                      renderItem={({item})=>{
                        return (
                            <View style={styles.root}>

                           
                        <TouchableOpacity style={styles.left}
                            onPress={()=>{
                            navigation.navigate('Detail',{
                                id:item._id
                            })
                        }}>
                        {/* <Image style={styles.image}  source={{uri:'../egypt.jpg'}} /> */}
                        <Text style={styles.Ttext}>{item.name}</Text>
                        </TouchableOpacity>
                        <Pressable style={styles.delete}
                            onPress={()=>{
                                deleteTrack(item._id)
                            }}
                        >
                            <AntDesign name='delete' size={30} color="#689ad4" />

                        </Pressable>
                         </View>)
                    }}
                      />
        </SafeAreaView>
        )
     }
    
}
const styles=StyleSheet.create({
    root:{
       
        flexDirection:'row',
        //justifyContent:'space-between',
        margin:20,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#d1d1d1",
        backgroundColor:"#fff",
        minHeight:50,
        alignItems:'center'

    },
    left:{
        minWidth:'70%'
    },
    image:{
        height:50,
        width:80,
        marginHorizontal:2,
        resizeMode:"contain",
        borderRadius:2,
    },
    Ttext:{
        padding:5,
        //alignSelf:'center',
        fontSize:20,
        fontWeight:"bold",
        color:'#213a57'
    },
    Dtext:{
        color:'gray',

    },
    delete:{
        position:'absolute',
        right:10,
    }
})

export default TrackListScreen;