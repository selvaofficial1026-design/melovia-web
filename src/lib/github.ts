export async function getLatestRelease(): Promise<{ version: string; url: string }> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/selvaofficial1026-design/Melovia-App/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 300 }, // Re-fetch every 5 minutes
      }
    );

    if (!res.ok) throw new Error("GitHub API failed");

    const data = await res.json();
    return {
      version: data.tag_name ?? "v1.0.3",
      url:
        data.assets?.[0]?.browser_download_url ??
        "https://github.com/selvaofficial1026-design/Melovia-App/releases/latest",
    };
  } catch {
    // Fallback if API is unavailable
    return {
      version: "v1.0.3",
      url: "https://github.com/selvaofficial1026-design/Melovia-App/releases/download/v1.0.3/Melovia.apk",
    };
  }
}
