import {
  AiSparklesIcon,
  BookCheckIcon,
  BookmarkPlusIcon,
  HeadphonesIcon,
} from "@hugeicons/core-free-icons"

export const FEATURE_CARDS = [
  {
    title: "Beautiful Reading",
    description:
      "Clean, distraction-free reading with multiple modes for the way you like to move through scripture.",
    icon: AiSparklesIcon,
  },
  {
    title: "Read Along or Listen",
    description:
      "Follow highlighted words with synchronized audio, or just listen as your day goes on.",
    icon: HeadphonesIcon,
  },
  {
    title: "Stay Consistent",
    description:
      "Set goals, track progress, and use reminders, streaks, and awards to build a lasting habit.",
    icon: BookCheckIcon,
  },
  {
    title: "Save What Matters",
    description:
      "Bookmarks and favorites make it easy to return to meaningful passages.",
    icon: BookmarkPlusIcon,
  },
] as const
