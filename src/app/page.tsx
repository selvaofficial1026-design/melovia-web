import { getLatestRelease } from "@/lib/github";
import HomeClient from "./home-client";

// Revalidate this page every 5 minutes so version stays fresh
export const revalidate = 300;

export default async function Home() {
  const { version, url } = await getLatestRelease();
  return <HomeClient version={version} apkUrl={url} />;
}
