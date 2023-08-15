import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, ImageBackground, FlatList, Button } from 'react-native'
const image = {uri: 'https://designimages.appypie.com/appbackground/appbackground-87-nature-outdoors.jpg'};
const Screen = () => { 
 const contants=
 [{id:1,name:'anas'},
  {id:2,name:'mosa'},
 {id:3,name:'flex'},{id:4,name:'mohmd'}];
 const [contantsdata,setcontants]=useState(contants)
 const [text, onChangeText] = React.useState('');
const  C=(S)=>{
     onChangeText(S)
   let result = contants.filter((contants) => contants.name .includes(S))
   setcontants(result)
 
  }


  
  return (
     
   <SafeAreaView 
     style={{
     flex:1,
    //  marginHorizontal:20,
     justifyContent:'flex-start'
   }}> 
 <View style={styles.container}>
   <ImageBackground c source={image} resizeMode="cover" style={styles.image}>
     <Text style={styles.text}>Home</Text>
     <TextInput
     value={text}
      onChangeText={C}
       placeholder='Search ' 
     clearButtonMode='always' 
    style={styles.SearchBox}
       autoCapitalize='none'
        autoCorrect={false} />
       
     <FlatList
        data={contantsdata}
        renderItem={({item}) => <Text> {item.name}</Text>}
        // keyExtractor={item => .id}
      />
   
    
   </ImageBackground>



   </View>

   
         <View style={styles.card}>

         <View style={styles.TopContiner}>
           {/* <Image 
             style={styles.Img}  
             source={image} 
           /> */}
           <View style={styles.TextContiner}>
             <Text style={styles.textStyle}>name</Text>
             <Text style={styles.textStyle}>lastName</Text>
           </View>
         </View>
 
       <View style={styles.BottomContiner}>
           <Text style={styles.textStyle}>ID</Text>
       </View>
 
 
       </View>
       </SafeAreaView>
     )
   }
 
   {/* <View style={styles.TopContiner}>
   
           <View style={styles.imgCard}>
             {image?<Image style={styles.Img}  source={image} />:null}
           </View>
   
           <View style={styles.TextContiner}>
             <Text style={styles.textStyle}>{name}</Text>
             <Text style={styles.textStyle}>{lastName}</Text>
           </View>
   
         </View>
   
         <View style={styles.BottomContiner}>
           <Text style={styles.textStyle}>ID</Text>
         </View> */}
   
 
 
 

   

const styles= StyleSheet.create({
 SearchBox:{
     alignItems:'flex-start',
     paddingHorizontal:20,
     paddingVertical:10,
     borderColor:'gray',
     borderWidth:1,
     borderRadius:18},
 container: {
    height:"100%",
    width:"100%",
    
    },
image: {
      height:'100%',
      width:'100%',
      justifyContent: 'center',
    },
 text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
textStyle:{
         fontSize: 40,
         color:'black',
         fontWeight:'900',
         // alignSelf:'flex-end',
       },
       card:{
         backgroundColor:'red',
         height:400,
         width:400,
         alignSelf:'center',
         borderRadius:20,
         borderWidth:10,
         borderColor:'#0a6db9',
         padding:10,
         margin:10,
         flexDirection:'column',
         alignItems:'center'
         // justifyContent:'flex-end',
       },
       imgCard:{
         backgroundColor:'black',
         alignSelf:'flex-start',
         height:'100%',
         width:'40%',
         marginRight:10
       },
       TopContiner:{
         height:'50%',
         width:'100%',
         flexDirection:'row',
         // backgroundColor:'red'
       },
       TextContiner:{
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'blue',
         // width:'60%',
         flexGrow:1,
         flexDirection:'column',
       },
       BottomContiner:{
         flexGrow:1,
         // width:'100%',
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:"#fff",
       },
       Img:{
         height:'100%',
         width:'50%',
       },  textStyle:{
        fontSize: 40,
        color:'black',
        fontWeight:'900',
        // alignSelf:'flex-end',
      },
      card:{
        backgroundColor:'red',
        height:400,
        width:400,
        alignSelf:'center',
        borderRadius:20,
        borderWidth:10,
        borderColor:'#0a6db9',
        padding:10,
        margin:10,
        flexDirection:'column',
        alignItems:'center'
        // justifyContent:'flex-end',
      },
      imgCard:{
        backgroundColor:'black',
        alignSelf:'flex-start',
        height:'100%',
        width:'40%',
        marginRight:10
      },
      TopContiner:{
        height:'50%',
        width:'100%',
        flexDirection:'row',
        // backgroundColor:'red'
      },
      TextContiner:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        // width:'60%',
        flexGrow:1,
        flexDirection:'column',
      },
      BottomContiner:{
        flexGrow:1,
        // width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#fff",
      },
      Img:{
        height:'100%',
        width:'50%',
      }

 
})
export default Screen;