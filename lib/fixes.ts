export type FixGuide = {
  slug: string
  title: string
  description: string
  duration: string
  category: "wifi" | "computer" | "phone" | "printer" | "account" | "streaming"
  steps: string[]
}

export const FIXES: FixGuide[] = [
  {
    slug: "slow-wifi",
    title: "Slow or dropping Wi-Fi",
    description:
      "Reset the right way, find dead zones, and stop buffering for good.",
    duration: "3 min fix",
    category: "wifi",
    steps: [
      "Restart your router and modem (unplug both, wait 30 seconds, plug modem first).",
      "Move closer to the router or reduce interference from microwaves and baby monitors.",
      "Forget and reconnect to your network on the device that drops.",
      "If speeds are still low, run a speed test and contact your ISP if you're far below your plan.",
    ],
  },
  {
    slug: "sluggish-computer",
    title: "Sluggish computer",
    description: "Free up storage, kill background hogs, and bring back the speed.",
    duration: "5 min fix",
    category: "computer",
    steps: [
      "Close apps you're not using and check Task Manager / Activity Monitor for high CPU or memory.",
      "Free at least 10-15% of disk space by emptying trash and removing large downloads.",
      "Disable unnecessary startup programs.",
      "Install pending OS and browser updates, then restart once.",
    ],
  },
  {
    slug: "phone-acting-up",
    title: "Phone acting up",
    description: "Battery drain, full storage, crashing apps - sorted step by step.",
    duration: "4 min fix",
    category: "phone",
    steps: [
      "Restart your phone.",
      "Check storage - delete old photos/videos or offload to cloud if you're above 90% full.",
      "Update iOS/Android and your most-used apps.",
      "Reset network settings only if Wi-Fi or cellular is broken (you'll re-enter Wi-Fi passwords).",
    ],
  },
  {
    slug: "printer-offline",
    title: "Printer stuck offline",
    description:
      "Get it printing again without reinstalling everything from scratch.",
    duration: "2 min fix",
    category: "printer",
    steps: [
      "Confirm the printer is on and connected to the same Wi-Fi as your computer.",
      "Set the printer as default in system print settings.",
      "Clear the print queue and cancel stuck jobs.",
      "Remove and re-add the printer if it still shows offline.",
    ],
  },
  {
    slug: "locked-out-account",
    title: "Locked out of an account",
    description: "Safely reset passwords and set up 2FA so it never happens again.",
    duration: "3 min fix",
    category: "account",
    steps: [
      "Use the service's official \"Forgot password\" flow - never click links from email unless you're sure.",
      "Check spam for reset messages and try a different browser if the page won't load.",
      "Use a password manager to generate and store a new unique password.",
      "Enable two-factor authentication (authenticator app preferred over SMS).",
    ],
  },
  {
    slug: "streaming-tv-glitches",
    title: "Streaming & smart TV glitches",
    description: "Fix freezing, sign-in loops, and apps that refuse to load.",
    duration: "4 min fix",
    category: "streaming",
    steps: [
      "Sign out and back into the streaming app on your TV or stick.",
      "Check for app and TV firmware updates.",
      "Power-cycle the TV and streaming device (unplug 60 seconds).",
      "If one app fails, try another network (phone hotspot) to rule out router issues.",
    ],
  },
]

export function fixHref(slug: string): string {
  return `/fixes/${slug}`
}

export function getFixBySlug(slug: string): FixGuide | undefined {
  return FIXES.find((f) => f.slug === slug)
}

export const FOOTER_FIX_LINKS = [
  { label: "Wi-Fi & internet", slug: "slow-wifi" },
  { label: "Slow computer", slug: "sluggish-computer" },
  { label: "Phone issues", slug: "phone-acting-up" },
  { label: "Printers", slug: "printer-offline" },
  { label: "Passwords", slug: "locked-out-account" },
] as const
