import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

export default function GobackButton() {
  return (
    <button className="flex items-center">
      <HugeiconsIcon icon={ArrowLeft01Icon} size={20} color="currentColor" />
    </button>
  );
}
