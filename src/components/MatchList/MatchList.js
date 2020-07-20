import React, { useState, useEffect } from "react";
import {
  ContainerMatchList,
  ContainerList,
  MatchCard,
  PhotoExemple,
  MatchName,
} from "../Styled/Styled";

import axios from "axios";

export default function MatchCandidates() {
  const [matches, setMatches] = useState([]);

  //mostrar a lista de matches
  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tatiana/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const getMatch = matches.map((match) => {
    return (
      <ContainerList>
        <MatchCard>
          <PhotoExemple src={match.photo} />
          <MatchName>{match.name}</MatchName>
        </MatchCard>
      </ContainerList>
    );
  });
  return <ContainerMatchList>{getMatch}</ContainerMatchList>;
}
