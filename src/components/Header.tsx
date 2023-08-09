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
        style={{ backgroundColor: "black" }}
      >
        ZH
      </Button>
      <br />
      <br />
    </div>
  );
};

export default Header;
