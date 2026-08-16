import SplashMarkup from "@/components/SplashMarkup";
import SplashController from "@/components/SplashController";

/** Shell SSR + controller cliente mínimo. */
export default function SplashScreen() {
  return (
    <>
      <SplashMarkup />
      <SplashController />
    </>
  );
}
