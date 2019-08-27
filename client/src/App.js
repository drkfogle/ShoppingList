import React from "react";
import AppNavBar from "./components/AppNavBar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import Store from "./store";
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <AppNavBar />
        <Container>
        <ItemModal />
        <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
