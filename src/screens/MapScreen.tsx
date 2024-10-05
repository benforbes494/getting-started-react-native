import {GestureHandlerRootView} from "react-native-gesture-handler";
import MapsIndoors, {
  MapControl,
  MapView, MPCameraUpdate, MPDirectionsRenderer,
  MPDirectionsService,
  MPFilter,
  MPLocation, MPMapConfig,
  MPQuery, MPRoute,
  MPVenue
} from "@mapsindoors/react-native-maps-indoors-google-maps";
import {Button, Dimensions, NativeEventEmitter, Text, useColorScheme, useWindowDimensions, View} from "react-native";
import SearchBox from "../components/SearchBox";
import BottomSheet from "@gorhom/bottom-sheet";
import NavigationHeader from "../components/NavigationHeader";
import SearchResults from "../components/SearchResults";
import RouteInstructions from "../components/RouteInstructions";
import React, {useEffect, useRef, useState} from "react";


export default function MapScreen({navigation, route}) {

    MapsIndoors.load('auckland').then(async () => {
        //Create the MapControl. Which will be using the MapView of the component.
        const mc = await MapControl.create(new MPMapConfig({useDefaultMapsIndoorsStyle: true}), NativeEventEmitter);
        //Get a venue and move the camera to it.
        let venue: MPVenue = (await MapsIndoors.getVenues()).getAll()[1];
        mc.goTo(venue);
    })


  return (
    <MapView
        style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        }}
    />
  );
}
