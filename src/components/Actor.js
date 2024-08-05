import React, { useState, useEffect } from 'react';
import fetchActor from '../api/ActorAPI';

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

export default DisplayActor;