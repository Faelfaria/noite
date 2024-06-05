import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { themeColors } from '../theme/theme';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, description, restaurants }) => {
  return (
    <View>
      <View style={styles.rowHeader}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>see all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantCard item={restaurant} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: 'gray',
    fontSize: 12,
  },
  seeAll: {
    color: themeColors.text,
    fontWeight: '600',
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    overflow: 'visible',
    paddingTop: 5,
  },
});

export default FeaturedRow;
