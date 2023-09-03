import { WINNERS_NUMBERS, URL } from './constant.js';


let players = await getUsers();
let winners = topPlayers(players, WINNERS_NUMBERS);


  
function postUser(user) {
  let data = JSON.stringify(user)
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: data
  });
  
}


async function getUsers() {
  let response = await fetch(URL)
  return response.json();
}

function topPlayers(players, winnersNumbers) {
  players.sort( (a, b) => b.balance - a.balance )

   return players.slice(0, winnersNumbers)
}


export {postUser, winners}