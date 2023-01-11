import React from "react";
import AdminLists from "../AdminLists";
import RequestContent from "../RequestContent";
import UserOrdersContent from "../UserOrdersContent";

function DashboardContent({ user, content, setContent }) {
  if (content === 0) {
    return <RequestContent user={user} setContent={setContent} />;
  } else if (content === 1) {
    return <UserOrdersContent />;
  } else if (content === 2) {
    return <AdminLists orderStatus="under_review" />;
  } else if (content === 3) {
    return <AdminLists orderStatus="approved" />;
  } else {
    return <AdminLists orderStatus="rejected" />;
  }
}

export default DashboardContent;
