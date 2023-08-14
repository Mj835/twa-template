import { useTranslation } from "react-i18next";
import { Button } from "./styled/styled";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t("header.message")}</h1>

      <br />
      <Button
        onClick={() => handleChangeLang("en")}
        style={{ marginRight: 5, backgroundColor: "black" }}
      >
        EN
      </Button>
      <Button
        onClick={() => handleChangeLang("zh")}
        style={{ marginRight: 5, backgroundColor: "black" }}
      >
        ZH
      </Button>
      <Button
        onClick={() => handleChangeLang("de")}
        style={{ marginRight: 5, backgroundColor: "black" }}
      >
        DE
      </Button>
      <Button
        onClick={() => handleChangeLang("es")}
        style={{ marginRight: 5, backgroundColor: "black" }}
      >
        ES
      </Button>
      <Button
        onClick={() => handleChangeLang("it")}
        style={{ backgroundColor: "black" }}
      >
        IT
      </Button>
      <br />
      <br />
    </div>
  );
};

export default Header;
