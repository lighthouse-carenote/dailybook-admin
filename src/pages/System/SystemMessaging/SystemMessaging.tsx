import React from "react";
import {
  SystemMessagingContent,
  SystemMessagingHistory,
} from "~/components/System/SystemMessaging";

const SystemMessaging = () => {
  return (
    <div>
      <SystemMessagingContent />
      <SystemMessagingHistory />
    </div>
  );
};

export default SystemMessaging;
