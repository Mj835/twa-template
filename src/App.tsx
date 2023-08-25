import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect } from "react";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect();

  function setSiteLanguage(languageCode: string) {
    // Implement your logic to change the site's language based on the provided code
    // For example, you might update the HTML lang attribute or use an i18n library
    console.log("Setting site language to:", languageCode);
  }

  // Replace this with your actual function to map coordinates to a language code
  function getLanguageFromCoordinates(
    latitude: number,
    longitude: number
  ): string {
    // Implement your logic to determine the language code based on coordinates
    // This could involve using APIs like reverse geocoding services
    // For this example, let's just return a sample language code
    if (latitude > 37 && longitude < -122) {
      return "en"; // English
    } else if (latitude > 52 && longitude < 13) {
      return "de"; // German
    } else if (latitude > 48 && longitude > 2) {
      return "fr"; // French
    } else {
      return "en"; // English
    }
  }

  // Use the useEffect hook to run the location detection logic when the component mounts
  useEffect(() => {
    // Use the Geolocation API to get the user's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const languageCode = getLanguageFromCoordinates(
          position.coords.latitude,
          position.coords.longitude
        );

        // Set the site's language to the detected language code
        setSiteLanguage(languageCode);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow>
          <div style={{ textAlign: "center" }}>
            <Header /> <Home />
          </div>
          {/* <Counter />
          <TransferTon />
          <Jetton /> */}
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
