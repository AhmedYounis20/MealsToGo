import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {theme} from "./src/infrastructure/theme"
import { Oswald_400Regular, useFonts as useOswald} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { RestaurantsScreen } from "./src/features/restaurants/Screens/restaurants.screen";
export default function App() {
  // const [seachValue, setSearchValue] = useState("");
  // const OnSearchChanged = (query) => setSearchValue(query);
  const [oswaldLoded] = useOswald({Oswald_400Regular});
  const [latoLoded] = useLato({Lato_400Regular});
  if(!oswaldLoded || !latoLoded)
    return null;
  return (
    <>
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>
  );
}
