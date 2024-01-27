import React, { useState } from 'react'
import Athlete from './Athlete'
import { observer } from 'mobx-react';

type Props = {
    athlete: Athlete
}

function TradeForm({ athlete }: Props) {
    const [teamName, setTeamName] = useState<string>("");
  
    return (
      <>
        <input
          type="text"
          placeholder="Team name..."
          onChange={(e) => setTeamName(e.target.value)}
        />
        <span>
          <button type="button" onClick={() => athlete.tradePlayer(teamName)}>
            Trade
          </button>
        </span>
      </>
    );
  }
  
export default observer(TradeForm)