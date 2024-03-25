import type { AppProps } from "next/app";
import { useReportWebVitals } from "next/web-vitals";

export default function App({ Component, pageProps }: AppProps) {
  useReportWebVitals((metric) => {
    console.log("1/ From `useReportWebVitals` hook:", metric);
  });

  return <Component {...pageProps} />;
}

export function reportWebVitals(metric: any) {
  console.log("2/ From `reportWebVitals` export:", metric);
}
