import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant cards */}
        <RestaurantCard
            id = {123}
            imgUrl = "https://impulsapopular.com/wp-content/uploads/2020/03/4695-Las-seis-fases-utilizadas-por-McDonald%C2%B4s-para-revitalizar-la-marca-1.jpg"
            title = "Big Mac!"
            rating = {4.5} 
            genre = "Fast food"
            address = "123 Main St"
            short_description = "This is a test description"
            dishes = {[]}
            long = {20}
            lat = {0}
        />
        <RestaurantCard
            id = {123}
            imgUrl = "https://impulsapopular.com/wp-content/uploads/2020/03/4695-Las-seis-fases-utilizadas-por-McDonald%C2%B4s-para-revitalizar-la-marca-1.jpg"
            title = "Big Mac!"
            rating = {4.5} 
            genre = "Fast food"
            address = "123 Main St"
            short_description = "This is a test description"
            dishes = {[]}
            long = {20}
            lat = {0}
        />
        <RestaurantCard
            id = {123}
            imgUrl = "https://impulsapopular.com/wp-content/uploads/2020/03/4695-Las-seis-fases-utilizadas-por-McDonald%C2%B4s-para-revitalizar-la-marca-1.jpg"
            title = "Big Mac!"
            rating = {4.5} 
            genre = "Fast food"
            address = "123 Main St"
            short_description = "This is a test description"
            dishes = {[]}
            long = {20}
            lat = {0}
        />
        <RestaurantCard
            id = {123}
            imgUrl = "https://impulsapopular.com/wp-content/uploads/2020/03/4695-Las-seis-fases-utilizadas-por-McDonald%C2%B4s-para-revitalizar-la-marca-1.jpg"
            title = "Big Mac!"
            rating = {4.5} 
            genre = "Fast food"
            address = "123 Main St"
            short_description = "This is a test description"
            dishes = {[]}
            long = {20}
            lat = {0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow