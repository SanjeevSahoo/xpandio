import { Button } from "@/_common/components/ui/button";
import { appStore } from "@/_common/store/appStore";
import { Menu } from "lucide-react";
import React from "react";

function SideBarToggler() {
  const appDrawerStatus = appStore((state) => state.appDrawerStatus);
  const setAppDrawerStatus = appStore((state) => state.setAppDrawerStatus);

  const handleSidebarToggle = () => {
    setAppDrawerStatus({
      sidebar: !appDrawerStatus.sidebar,
      settings: false,
      notification: false,
    });
  };
  return (
    <Button variant="outline" size="icon" onClick={handleSidebarToggle}>
      <Menu className="h-4 w-4" />
    </Button>
  );
}

export default SideBarToggler;
