//importing hella shit from react and expo-router


import {useState} from 'react';
import { View, ScrollView, SafeAreaView } from "react-native";
import {Stack, useRouter} from 'expo-router';

//importing hella shit from the project file
import {COLORS, icons, images, SIZES} from '../constants';
import {
    ScreenHeaderBtn, Welcome, Profile
} from '../components'
import AboutMe from '../screens/AboutMe'; // Update the path based on your folder structure



//declare the component: Home
const Home = () =>{

    //how you use the router?
    const router = useRouter();

    //what the component returns:
    return(

        //put all of it a SafeAreaView so that the app is safe to us eon any device
        <SafeAreaView style={{flex: 1, backgroundColor: '#262c33'}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: '#262c33'},
                    headerShadowVisible: false,
                    headerRight: () => (
                        <ScreenHeaderBtn
                        iconURL={icons.menu}
                        dimension={30}
                        handlePress={(item) => console.log(`Selected: ${item.label}`)}
                        menuItems={[
                            { label: 'About me' },
                            { label: 'Resume' },
                            { label: 'Contact Me' },
  ]}
/>

                    ),
                    headerTitle: ""
                }}
            />


        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Profile profilePic={'../assets/images/daniel.jpg'}/>
                <Welcome/>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Home;