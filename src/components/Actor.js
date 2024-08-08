// import React, { useState, useEffect } from 'react';
// import fetchActor from '../api/ActorAPI';
import './Actor.css';
import ActorSearch from './ActorSearch.js';

/*
function DisplayActor() {
  const [actorData, setActorData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchActor();
      setActorData(response.data);
    }

    fetch();
  }, []);

  return (
    <div>
      {actorData ? (
        <ActorView actors={actorData} />
      ) : (
        <p> Loading... </p>
      )}
    </div>
  );
};

function ActorView({ actors }) {
  const cards = [];

  actors.forEach((actor) => {
    const key = `[{actor['card_name']}] {actor['actor_name']}`;
    cards.push(
      <ActorCard actor={actor} key={key} />
    );
  });

  return (
    <div>
      {cards}
    </div>
  );
};

function ActorCard({ actor }) {
  return (
    <p>[{actor['card_name']}] {actor['actor_name']}</p>
  );
};
*/

function Actor() {
  return (
    <div className='content-inner'>
      <h1 className='page-header'>ACTOR</h1>
      <hr className='page-header-separator' />
      <ActorSearch />
    </div>
  );
};

export default Actor;