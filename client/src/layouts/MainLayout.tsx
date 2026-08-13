import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components/main";
import { ClickSpark, Noise } from "@/components/react-bits";

export default function MainLayout() {
  return (
    <ClickSpark sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="relative z-10 flex min-h-dvh flex-col">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
      <Noise patternSize={250} patternAlpha={12} patternRefreshInterval={2} />
    </ClickSpark>
  );
}
