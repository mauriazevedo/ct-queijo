import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNav from "../../components/DasboardNav";
import DashboardContent from "../../components/DashboardContent";
import DashboardHeader from "../../components/DashboardHeader";
import { GetUserById } from "../../services/users";

function Dashboard() {
  const navigation = useRef(useNavigate());
  const [content, setContent] = useState(0);
  const [currentuser, setCurrentUser] = useState(null);

  useEffect(() => {
    const currentUserId = localStorage.getItem("user_id");
    if (currentUserId !== null) {
      (async () => {
        const user = await GetUserById(currentUserId).then(
          (response) => response
        );
        setCurrentUser(user);
      })();
    } else {
      navigation.current("/login");
    }
  }, []);

  return (
    <>
      <DashboardHeader />
      <DashboardNav
        user={currentuser}
        content={content}
        setContent={setContent}
      />
      <DashboardContent
        user={currentuser}
        setContent={setContent}
        content={content}
      />
    </>
  );
}

export default Dashboard;
