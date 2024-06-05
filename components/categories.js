import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { categories } from "../constants";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnStyle = isActive ? styles.activeButton : styles.inactiveButton;
          let textStyle = isActive ? styles.activeText : styles.inactiveText;

          return (
            <TouchableOpacity
              key={index}
              style={styles.categoryContainer}
              onPress={() => setActiveCategory(category.id)}
            >
              <View style={[styles.button, btnStyle]}>
                <Image
                  style={styles.image}
                  source={category.image}
                />
              </View>
              <Text style={textStyle}>{category.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  categoryContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  button: {
    padding: 8,
    borderRadius: 9999,
    backgroundColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activeButton: {
    backgroundColor: "#7f7f7f",
  },
  inactiveButton: {
    backgroundColor: "#e0e0e0",
  },
  image: {
    width: 45,
    height: 45,
  },
  activeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginTop: 4,
  },
  inactiveText: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
});

export default Categories;
