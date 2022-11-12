import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const CategoryCard = ({ imgUrl, title}) => {
  return (
    //This is what we use when we somenthing touchable, when we touch it the opacity changes
    <TouchableOpacity> 
      <Image source={{uri: imgUrl}}
       style={{width: 80, height: 80}} className="h-20 w-20 rounded mx-1.5"/>
      <Text className="absolute bottom-1 left-1 text-white font-bold px-1">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard;