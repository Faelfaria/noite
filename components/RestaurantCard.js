import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurante", { ...item })}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
          marginRight: 6,
          backgroundColor: "white",
          borderRadius: 20,
          elevation: 5,
          overflow: "hidden",
        }}
      >
        <Image
          style={{ height: 144, width: 256, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          source={item.image}
        />
        <View style={{ padding: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
            <Image
              source={require("../assets/images/pizzaIcon.png")}
              style={{ height: 16, width: 16 }}
            />
            <Text style={{ fontSize: 12, color: "gray" }}>
              <Text style={{ color: "green" }}>{item.stars}</Text>
              <Text style={{ color: "gray" }}>
                ({item.reviews} review) . <Text style={{ fontWeight: "600" }}>{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text style={{ fontSize: 12, color: "gray", marginLeft: 4 }}>
              Nearby . {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
