import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_zh from "./translations/zh/global.json";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  lng: "en", // Default language
  resources: {
    en: {
      global: global_en,
    },
    zh: {
      global: global_zh,
    },
  },
});

// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </I18nextProvider>
  </TonConnectUIProvider>
);
