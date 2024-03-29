import "./App.css";

import { IntlProvider, FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesaj",
  },
  "en-US": {
    title: "Hello World",
    description: "{count} new messages",
  },
};

function App() {
  const defaultLocale = localStorage.getItem("lang") || navigator.language;
  console.log(defaultLocale);
  const [lang, setLang] = useState(defaultLocale);

  useEffect(()=>{
    localStorage.setItem("lang", lang);
  }, [lang])
  return (
    <div className="App">
      <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" values={{count: 5}}/>
        </p>
        <br /> <br />
        <button onClick={() => setLang("tr-TR")}>TR</button>
        <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
