import React from "react";
import RequestContent from "../RequestContent";
import UserOrdersContent from "../UserOrdersContent";

function DashboardContent({ user, content, setContent }) {
  if (content === 0) {
    return <RequestContent user={user} setContent={setContent} />;
  } else if (content === 1) {
    return <UserOrdersContent />;
  }
}

export default DashboardContent;
