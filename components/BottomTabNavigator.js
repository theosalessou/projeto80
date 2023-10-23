import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
//Preencha com o código que falta para adicionar o "route name"
            if (route.name === "bicycle") {
                iconName = "bicycle";
              } else if (route.name === "time") {
                iconName = "time";
              }  

              // Você pode retornar qualquer componente que quiser aqui!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })}
          tabBarOptions={{
            //preencha o código para adicionar #FBE5C0 para activeTintColor e black (preto) para inactiveTintColor
           activeTintColor: "#FBE5C0",
           inactiveTintColor: "black",
            style: {
              height: 100,
              borderTopWidth: 0,
              backgroundColor: "#F88379"
            },
            labelStyle: {
              fontSize: 20,
              fontFamily: "Rajdhani_600SemiBold"
            },
            labelPosition: "below-icon",
            tabStyle: {
              alignItems: "center",
              justifyContent: "center"
            }
          }}
        >
          <Tab.Screen name="Alugue uma Bicicleta" component={RideScreen} />
          <Tab.Screen name="Histórico de Locações" component={RideHistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
