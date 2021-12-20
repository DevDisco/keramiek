import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getShowcase } from "../redux/ducks/showcaseSlice";
import Banner from "../components/Banner";
import { getAgenda } from "../redux/ducks/agendaSlice";
import HomeAgenda from "../components/HomeAgenda";
import HomeCards from "../components/HomeCards";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShowcase());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAgenda());
  }, [dispatch]);

  return (
    <>
      <Banner />
      <HomeAgenda />
      <HomeCards page="home" category="nieuw" />
      <HomeCards page="home" category="autonoom" />
      <HomeCards page="home" category="toegepast" />
    </>
  );
}

export default Home;
