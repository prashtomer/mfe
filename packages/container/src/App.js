import React from 'react';
import MarketingApp from "./components/MarketingApp";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header/>
          <MarketingApp/>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
};
