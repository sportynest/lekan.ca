export const pickshub = {
  name: "PicksHub",
  summary:
    "A Canadian sports publication covering news, analysis and predictions across 15+ leagues. I designed and built every part of it, from the website and backend to the apps.",
  website: "https://www.pickshub.ca",
  appStore: "https://apps.apple.com/ca/app/pickshub/id6803744375",
  screens: [
    { name: "home", label: "Home feed" },
    { name: "article", label: "Analysis" },
    { name: "play", label: "PicksHub Play" },
    { name: "picks", label: "Picks record" },
  ],
  builds: [
    {
      title: "pickshub.ca",
      description: "The publication itself: league hubs, live scores, match centres and long-form analysis, server-rendered for speed and search.",
      skills: ["Next.js", "React", "TypeScript"],
    },
    {
      title: "Editorial Backend",
      description: "One API on Cloudflare Workers that serves the website, the apps and the newsroom admin, from publishing to push notifications.",
      skills: ["Cloudflare Workers", "API Design", "Databases"],
    },
    {
      title: "Native Apps",
      description: "An iOS app on the App Store with widgets and rich notifications, and a native Android app in Kotlin and Jetpack Compose.",
      skills: ["SwiftUI", "Kotlin"],
    },
    {
      title: "PicksHub Play",
      description: "A predictions game with weekly rounds per league. Results settle automatically from official finals, with a human check for edge cases.",
      skills: ["Cloudflare Workers", "API Design"],
    },
  ],
}
