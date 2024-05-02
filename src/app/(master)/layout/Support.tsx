import { Button } from "@/_common/components/ui/button";
import { MessageCircleQuestion } from "lucide-react";
import React from "react";

function Support() {
  return (
    <Button variant="default" size="icon">
      <MessageCircleQuestion className="h-6 w-6" />
    </Button>
  );
}

export default Support;
