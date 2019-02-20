import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { PURPLE, NAV_ICON_SIZE } from "../styles/shared";

export default function EditIcon({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name="edit" size={NAV_ICON_SIZE} color={PURPLE}></FontAwesome>
    </TouchableOpacity>
  );
}
