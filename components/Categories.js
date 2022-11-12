import { ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard.js'

const Categories = () => {
  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
    {/* CategoryCards */}
      <CategoryCard imgUrl="https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg" title="Testing 1"/>
      <CategoryCard imgUrl="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg" title="Testing 2"/>
      <CategoryCard imgUrl="https://media.istockphoto.com/id/938742222/es/foto/pizza-de-pepperoni-cheesy.jpg?s=170667a&w=0&k=20&c=EdHh07gwyYqEmreY17ifpWhkGItQrztwQrBuGOizNU4=" title="Testing 3"/>
      <CategoryCard imgUrl="https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg" title="Testing 1"/>
      <CategoryCard imgUrl="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg" title="Testing 2"/>
      <CategoryCard imgUrl="https://media.istockphoto.com/id/938742222/es/foto/pizza-de-pepperoni-cheesy.jpg?s=170667a&w=0&k=20&c=EdHh07gwyYqEmreY17ifpWhkGItQrztwQrBuGOizNU4=" title="Testing 3"/>
    </ScrollView>
  )
}

export default Categories