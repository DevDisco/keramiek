import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardSection from "../components/CardSection";
import { getShowcase } from "../redux/ducks/showcaseSlice";
import Banner from "../components/Banner";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShowcase());
  }, [dispatch]);

  return (
    <>
      <Banner />
      <CardSection category="nieuw" />
      <CardSection category="autonoom" />
      <CardSection category="toegepast" />
    </>
  );
}

export default Home;
