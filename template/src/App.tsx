import * as React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <p>{t("edit")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("learn")}
        </a>
      </header>
    </div>
  );
}

export default App;
