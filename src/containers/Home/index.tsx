import React from "react";
import bannerInitial from "assets/images/banner-initial.png";

import s from "./style.scss";

export function Home() {
  return (
    <div className={s.home}>
      <img src={bannerInitial} />
    </div>
  );
}
