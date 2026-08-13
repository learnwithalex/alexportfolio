import { GitHubCalendar } from "react-github-calendar";
import { GITHUB_USERNAME } from "@/constants/data";

const theme = {
  dark: [
    "var(--github-empty)",
    "var(--github-l1)",
    "var(--github-l2)",
    "var(--github-l3)",
    "var(--github-l4)",
  ],
};

export default function GithubActivity() {
  return (
    <section className="layout pb-14">
      <div className="overflow-x-auto hide-scrollbar rounded-xl border border-line bg-secondary px-4 py-5 sm:px-5">
        <div className="min-w-[640px] text-muted [&_.react-activity-calendar__legend-month]:text-muted [&_text]:fill-muted">
          <GitHubCalendar
            username={GITHUB_USERNAME}
            colorScheme="dark"
            theme={theme}
            fontSize={12}
            blockSize={11}
            blockMargin={3}
          />
        </div>
      </div>
    </section>
  );
}
