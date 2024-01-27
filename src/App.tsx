import React from 'react';
import logo from './logo.svg';
import './App.css';
import Roster from './Roster';
import MoneyForm from './MoneyForm';
import Athlete from './Athlete';
import { TeamStoreProvider } from './TeamStore';
import TeamInfo from './TeamInfo';

const lebronJames = new Athlete("Lebron James", 37, 9);
const stephCurry = new Athlete("Steph Curry", 34, 5)

function getPlayersFromBackend(): Athlete[] {
  return [lebronJames, stephCurry]
}

function App() {

  const players = getPlayersFromBackend()

  return (
    <div className="App">
      <header className="App-header">
        <TeamStoreProvider players={players}>
          <TeamInfo />
          <Roster />
          <MoneyForm />
        </TeamStoreProvider>
      </header>
    </div>
  );
}

export default App;
