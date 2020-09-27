import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Covid from "./components/Covid-19/Covid-19";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

const App: React.FC = () => {

  const rating = [
    { id: 1, star: "star", active: false, count: 0 },
    { id: 2, star: "star", active: false, count: 0 },
    { id: 3, star: "star", active: false, count: 0 },
    { id: 4, star: "star", active: false, count: 0 },
    { id: 5, star: "star", active: false, count: 0 },
  ];

  const navigation = [
    { id: 1, icon: "icon", title: "Продолжить маршрут" },
    { id: 2, icon: "icon", title: "Сохранить" },
    { id: 3, icon: "icon", title: "Искать поблизости" },
    { id: 4, icon: "icon", title: "Отправить на телефон" },
    { id: 5, icon: "icon", title: "Поделиться" },
  ];

  const contacts = [
    {id:1, icon: 'icon', title: "Плехановская ул., 29, Воронеж, Воронежская обл., 394018"},
    {id:2, icon: 'icon', title: "Закрыто"},
    {id:2, icon: 'icon', title: "museum-vrn.ru"},
    {id:3, icon: 'icon', title: "8 (473) 252-03-95"},
    {id:5, icon: 'icon', title: "M58V+M9 Воронеж"},
    {id:6, icon: 'icon', title: "Я владелец компании"},
    {id:7, icon: 'icon', title: "Добавить ярлык"},
  ]

  return (
    <div className="app">
      <img
        src="https://lh5.googleusercontent.com/p/AF1QipOZ0karkKVWE08NGijcYcLLOXVF_6NfUzb_j2PL=w408-h250-k-no"
        alt="museum"
        className="imgApp"
      />
      <Header rating={rating} />
      <Navigation navigation={navigation} />
      <Covid />
      <Contacts contacts={contacts} />
    </div>
  );
};

export default App;
