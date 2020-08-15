import React from 'react';
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Feather";


export default function App() {
  let [fontsLoaded] = useFonts({
    'Asap-SemiBold': require('./assets/fonts/Asap-SemiBold.ttf'),
    'Asap-Medium': require('./assets/fonts/Asap-Medium.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else{
    return (
      <View style={styles.mainview}>
        <ImageBackground
        source={require("./assets/sun.jpg")}
        style={styles.postcontainer}
        blurRadius={40}>
         <BlurView tint="dark" intensity={100} style={styles.blurlayer}>
            <ImageBackground source={require("./assets/sun.jpg")} style={styles.postcontainer1} blurRadius={50}>
            <View style={styles.subview}>
            <View style={styles.view1}>
              <Text style={styles.textprofile}>Profile</Text>
            </View>
            <View style={styles.view2}>
            <Icon name="more-vertical" size={20} style={styles.icon} />
             </View>
             </View> 
            </ImageBackground>
            <View style={styles.view3}>
              <View style={styles.view4}>
                <Image style={styles.profilepic} source={require("./assets/sun.jpg")}></Image>
              </View>
              <View style={styles.view5}>
                <Text style={styles.profilename}>Parth Waghmare</Text>
                <Text style={styles.username}>@w_parth</Text>
               </View>
            </View>
            <View style={styles.view6}>
              <View style={styles.followers}>
                <Text style={styles.followernumber}>55k</Text>
                <Text style={styles.followername}>Followers</Text>
              </View>
              <View style={styles.followers}>
                <Text style={styles.followernumber}>24</Text>
                <Text style={styles.followername}>Following</Text>
              </View>
              <View style={styles.followers}>
                <Text style={styles.followernumber}>721</Text>
                <Text style={styles.followername}>Posts</Text>
              </View>
            </View>
          </BlurView>
         </ImageBackground>  
         <View style={styles.posts}>
            <Text style={styles.postname}>Posts</Text>
         </View>
         <ScrollView style={styles.ScrollView}>
          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme1.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme2.png")} />
          </View>
          </View>

          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme3.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme4.png")} />
          </View>
          </View>

          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme5.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme6.png")} />
          </View>
          </View>

          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme7.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme8.png")} />
          </View>
          </View>

          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme9.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme10.png")} />
          </View>
          </View>
         </ScrollView>
      </View>   
    )
  };
}

const styles = StyleSheet.create({
  subview: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainview: {
    flex: 1
  },
  view1: {
    marginLeft: "43.5%",
    flex: 9
  },
  view2: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  blurlayer: {
    width: "100%",
    height: 330
  },
  postcontainer: {
    width: "100%",
    height: 330
  },
  postcontainer1: {
    width: "100%",
    height: 40,
    marginTop:35,
    justifyContent: "center",
    alignItems: "center"
  },
  textprofile: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Asap-SemiBold"
  },
  icon: {
    color: "white",
   
  },
  view3: {
    flexDirection: "row",
    flex: 1,
    marginTop: 40,
    marginLeft: 20
  },
  profilepic: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  view4: {
    flex: 3,
  },
  view5: {
    flex: 7,
    marginTop: 5
  },
  profilename: {
    fontFamily: "Asap-SemiBold",
    color: "#fff",
    fontSize: 24,
    marginTop: 5
  },
  username: {
    fontFamily: "Asap-Medium",
    fontSize: 16,
    color: "#fff",
    paddingTop: 5
  },
  view6: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 20
  },
  followers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  followernumber: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Asap-Medium",
    color: "#fff"
  },
  followername: {
    color: "#fff"
  },
  posts: {
    flexDirection: "row",
    backgroundColor: "#181D20",
    paddingTop: 10,
    paddingBottom: 13,
    justifyContent: "center"
  },
  postname: {
    color: "#fff",
    fontFamily: "Asap-Medium",
    fontSize: 16
  },
  ScrollView: {
    backgroundColor: "#181D20"
  },
  normalView: {
    flexDirection: "row",
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  postimgview1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  postimgview2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  meme1: {
    height: 175,
    width: 175
  },
  meme2: {
    height: 175,
    width: 175
  }
});
