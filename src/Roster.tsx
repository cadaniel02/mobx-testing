import { observer } from "mobx-react";
import React from "react";
import Athlete from "./Athlete";
import TradeForm from "./TradeForm";
import { useTeamStore } from "./TeamStore";

function Roster() {
    const { players } = useTeamStore();
    return (
    <table>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Teams</th>
        <th>Trade Form</th>
        <th>Is it their birthday?</th>
        </tr>
        {players.map((athlete) => {
        return (
            <tr key={athlete.name}>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
            <td>{athlete.teamHistory}</td>
            <td>
                <TradeForm athlete={athlete} />
            </td>
            <td>
                <button
                    type="button"
                    style={{width: "100%"}}
                    onClick={() => athlete.wishHappyBirthday()}
                >
                    Wish happy birthday!
                </button>
            </td>
            </tr>
        );
        })}
    </table>
    );
}

export default observer(Roster)