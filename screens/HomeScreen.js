import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import {
    SafeAreaView, 
    View, 
    Image, 
    Text, 
    StatusBar, 
    StyleSheet, 
    TextInput,
    ScrollView}  from 'react-native';
import { 
    UserIcon, 
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function Home() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
    
    return (
      <SafeAreaView style={styles.container} className="bg-white">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                    Deliver now!
                </Text>
                <View className="flex-1 items-center flex-row">
                    <Text className="font-bold text-xl" style={styles.text}>
                        Current Location                    
                    </Text>
                    <ChevronDownIcon 
                            style={styles.chevron} 
                            size={20} 
                            color="#00CCBB"
                        />
                </View>
            </View>
            <UserIcon 
                style={styles.userIcon} 
                size={35} 
                color="#00CCBB"
            />   
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 mx-4">
            <View className="flex-1 items-center flex-row space-x-2 bg-gray-200 p-2 mb-4">
                <MagnifyingGlassIcon color="gray" size={20}/>
                <TextInput 
                    placeholder="Restaurants and cuisines"
                    keyboardType="default"    
                />
            </View>
            <AdjustmentsVerticalIcon 
                style={styles.adjustsIcon}
                color="#00CCBB"/>
        </View>

        {/* Body */}

        <ScrollView
            className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            {/* Categories */}
            <Categories/>

            {/* Features */}
            <FeaturedRow
                id="123"
                title="Featured"
                description="Paid placements from our partners"
            />
            <FeaturedRow
                id="1234"
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!"
            />
            <FeaturedRow
                id="12345"
                title="Offers near you!"
                description="Why not support your local restaurant tonight!"
            />

        </ScrollView>

      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        marginTop:StatusBar.currentHeight
    },
    chevron: {
        alignSelf: "flex-end",
        marginBottom: 1.5
    },
    userIcon: {
        marginTop: 12
    },
    adjustsIcon: {
        marginBottom: 16
    }
    });