import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ContainerCard,
  ProfilePhoto,
  InfoProfile,
  Buttons,
  ButtonX,
  ButtonHeart,
  ResetButton,
} from "../Styled/Styled";

export default function CandidateCard() {
  const [profile, setProfile] = useState({});
  const [userChoice, setUserChoice] = useState(null);

  //mostrar os perfis que podem dar matches
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tatiana/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //se eu der like tem que ver se o usuario tb deu like:
  const choosePerson = (value) => {
    const body = {
      id: profile.id,
      choice: value,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tatiana/choose-person",
        body
      )
      .then((response) => {
        getProfile();
        if (response.data.isMatch === true) {
          alert("Deu Match!!!!!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   //resetar todos os perfis
  const resetAllProfiles = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tatiana/clear"
      )
      .then((response) => {
        getProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerCard>
      <div>
        <ResetButton onClick={resetAllProfiles}>Reset</ResetButton>
      </div>
      <ProfilePhoto src={profile.photo} />

      <InfoProfile>
        <h4>
          {profile.name} , {profile.age}
          <h6>{profile.bio}</h6>
        </h4>
      </InfoProfile>
      <Buttons>
        <ButtonX onClick={() => choosePerson(false)}>×</ButtonX>

        <ButtonHeart onClick={() => choosePerson(true)}>♥</ButtonHeart>
      </Buttons>
    </ContainerCard>
  );
}
