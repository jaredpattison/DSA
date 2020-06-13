'use strict';

const superagent = require('superagent');

const fetchPeopleWithPromises = () => {

  return superagent.get('https://swapi.dev/api/people/')
    .then(response => {
      return response?.body?.results.map(person => superagent.get(person.url));
    })
    .then(peopleRequests => {
      return Promise.all(peopleRequests)
        .then(people => people.map(person => person.body.name));
    });
};

fetchPeopleWithPromises()
  .then(people => console.log( {people} )).catch(err => console.error(err));

const fetchPeopleWithAsync = async () => {

    const peopleSet = await superagent.get('https://swapi.dev/api/people');

    const people = peopleSet?.body?.results || [];
  
    const peopleRequests = people.map(person => superagent.get(person.url));
  
    const names = await(await Promise.all(peopleRequests)).map(data => data.body.name);
  
    return names;

};

fetchPeopleWithAsync()
  .then(people => console.log( {people} )).catch(err => console.error(err));
