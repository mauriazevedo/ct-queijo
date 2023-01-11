import React from "react";
import RequestContent from "../RequestContent";

function DashboardContent({ user, content }) {
  const options = [
    {
      nome: 11,
    },
    {
      nome: 22,
    },
    {
      nome: 33,
    },
    {
      nome: 44,
    },
  ];

  if (content == 0) {
    return <RequestContent user={user} />;
  } else {
    return <h1>222</h1>;
  }
}

export default DashboardContent;
