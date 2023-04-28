import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";
import { initializeApp,getApps } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { firebaseConfig } from "./src/services/authentication/authentication.mock";


if (!getApps().length) initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoded] = useOswald({ Oswald_400Regular });
  const [latoLoded] = useLato({ Lato_400Regular });
  if (!oswaldLoded || !latoLoded) {
    return null;
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>

              <Navigation />
              <ExpoStatusBar style="dark" />
   
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
