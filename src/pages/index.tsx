import React, { useEffect, useState } from "react";
import { getAll } from "~/api/champion";
import ChampionThumb from "~/components/atoms/ChampionThumb";
import ChampionGrid from "~/components/organisms/ChampionGrid";
import App from "~/components/templates/App";
import extractDataList from "~/utils/extractDataList";

function Home() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
      setChampions(extractDataList(response.data.data));
    });
  }, []);

  return (
    <App>
      {champions.length === 0 ? (
        <p>Loading</p>
      ) : (
        <ChampionGrid>
          {champions.map((champion) => (
            <ChampionThumb
              key={champion.id}
              src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${champion.id}.png`}
              onClick={() => alert(champion.name)}
            />
          ))}
        </ChampionGrid>
      )}
    </App>
  );
}

export default Home;
