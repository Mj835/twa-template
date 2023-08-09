import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <p>{t("home.body")}</p>
    </div>
  );
};

export default Home;
