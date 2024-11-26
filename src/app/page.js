"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Greeting from "./Greeting.js"
import Card from "./Card";
import Counter from "./Counter";
import ProductList from "./ProductList";
import App from "./App";
import App2 from "./App2";
import Parent from "./Parent";
import ToggleSwitch from "./ToggleSwitch";
import Counter2 from "./Counter2";
import LoginControl from "./LoginControl";
import Dropdown from "./Dropdown";
import ShoppingList from "./ShoppingList";
import ToDoList from "./ToDoList";
import ContactForm from "./ContactForm";
import ProductStock from "./ProductStock";
import ImageGallery from "./ImageGallery";


export default function Home() {
  return (
    <div className="App">
      <Greeting nombre="Juan" />
      <br/>
      <br/>
      <br/>
      <App/>
      <br/>
      <br/>
      <br/>
      <Counter/>
      <br/>
      <br/>
      <br/>
      <ProductList/>
      <br/>
      <br/>
      <br/>
      <App2/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 6</h1>
      <Parent/>
      <br/>
      <br/>
      <br/>
      <ToggleSwitch/>
      <br/>
      <br/>
      <br/>
      <ToDoList/>
      <br/>
      <br/>
      <br/>
      <Counter2/>
      <br/>
      <br/>
      <br/>
      <LoginControl/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 11</h1>
      <ProductStock inStock={true}/>
      <ProductStock inStock={false}/>
      <ProductStock inStock={true}/>
      <br/>
      <br/>
      <br/>
      <ContactForm/>
      <br/>
      <br/>
      <br/>
      <ShoppingList/>
      <br/>
      <br/>
      <br/>
      <Dropdown/>
      <br/>
      <br/>
      <br/>
      <ImageGallery/>
    </div>
  );
}
