import React, { useEffect, useState } from "react";
import { getAll } from "~/api/champion";
import ChampionThumb from "~/components/atoms/ChampionThumb";
import ChampionGrid from "~/components/organisms/ChampionGrid";
import extractDataList from "~/utils/extractDataList";

function Home() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
      setChampions(extractDataList(response.data.data));
    });
  }, []);

  return champions.length === 0 ? (
    <p>Loading</p>
  ) : (
    <ChampionGrid>
      {champions.map((champion) => (
        <ChampionThumb
          src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${champion.id}.png`}
          onClick={() => alert(champion.name)}
        />
      ))}
    </ChampionGrid>
  );
}

export default Home;
