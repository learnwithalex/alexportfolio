import { HugeiconsIcon } from "@hugeicons/react";
import { Loading03Icon } from "@hugeicons/core-free-icons";

const ButtonWithLoader = ({loading=false, initialText, loadingText, ...props}: ButtonWithLoaderProps) => {
  return (
    <button {...props} disabled={loading}>
        {loading && (
          <HugeiconsIcon
            icon={Loading03Icon}
            size={20}
            color="currentColor"
            className="animate-spin"
          />
        )}
        {loading ? loadingText : initialText}
    </button>
  )
}

export default ButtonWithLoader