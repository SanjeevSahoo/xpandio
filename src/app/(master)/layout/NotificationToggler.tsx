import { Button } from "@/_common/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

function NotificationToggler() {
  return (
    <Button variant="outline" size="icon">
      <Bell className="h-4 w-4" />
    </Button>
  );
}

export default NotificationToggler;
