export const TESTIMONIALS_DISPLAY_CAP = 9

export const TESTIMONIAL_AVATARS = [
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876704/verses-website/user-avatars/user-01_opt_arvnwu.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876702/verses-website/user-avatars/user-02_opt_uxjuc8.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876701/verses-website/user-avatars/user-03_opt_wcpt3e.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876700/verses-website/user-avatars/user-04_opt_pq57a5.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876699/verses-website/user-avatars/user-05_opt_yp2ki8.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876698/verses-website/user-avatars/user-06_opt_rhdfnp.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876696/verses-website/user-avatars/user-07_opt_hns9qg.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876695/verses-website/user-avatars/user-08_opt_tr3qxh.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876694/verses-website/user-avatars/user-09_opt_p3h9mg.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876693/verses-website/user-avatars/user-10_opt_kffsqv.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876692/verses-website/user-avatars/user-11_opt_cxkxbi.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876690/verses-website/user-avatars/user-12_opt_bu7o2m.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876689/verses-website/user-avatars/user-13_opt_nmmkg9.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876688/verses-website/user-avatars/user-14_opt_h3cpvc.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876687/verses-website/user-avatars/user-15_opt_qkwk7i.webp",
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790876686/verses-website/user-avatars/user-16_opt_kmj4sb.webp",
] as const

export type TestimonialRating = 4 | 5

export type Testimonial = {
  firstName: string
  lastInitial: string
  location: string
  quote: string
  rating: TestimonialRating
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    firstName: "Emily",
    lastInitial: "R",
    location: "Utah",
    quote:
      "Verses finally gave me a place to read one verse without rushing. I open it in the morning, stay with the words, and actually remember them later.",
    rating: 5,
    avatar: TESTIMONIAL_AVATARS[0],
  },
  {
    firstName: "David",
    lastInitial: "K",
    location: "United States",
    quote:
      "I listen while I walk. The read-along highlighting keeps me in the verse even when I cannot sit down with a book.",
    rating: 5,
    avatar: TESTIMONIAL_AVATARS[1],
  },
  {
    firstName: "Priya",
    lastInitial: "S",
    location: "California",
    quote:
      "I used to bounce between apps and lose my place. Verses keeps the verse in front of me, and that is all I wanted.",
    rating: 5,
    avatar: TESTIMONIAL_AVATARS[2],
  },
  {
    firstName: "Marcus",
    lastInitial: "H",
    location: "Texas",
    quote:
      "Reminders help me show up, but the reading itself is quiet. No feed, no streak panic, just scripture.",
    rating: 4,
    avatar: TESTIMONIAL_AVATARS[3],
  },
  {
    firstName: "Hannah",
    lastInitial: "L",
    location: "Canada",
    quote:
      "The audio is clear enough for chores and commutes. I finish a chapter without realizing I was multitasking.",
    rating: 5,
    avatar: TESTIMONIAL_AVATARS[4],
  },
  {
    firstName: "James",
    lastInitial: "P",
    location: "United Kingdom",
    quote:
      "Bookmarks are simple, which I like. I mark a verse at night and find it waiting the next morning.",
    rating: 5,
    avatar: TESTIMONIAL_AVATARS[5],
  },
]

export function displayedTestimonials<T>(items: readonly T[]): T[] {
  return items.slice(0, TESTIMONIALS_DISPLAY_CAP)
}

export function testimonialDisplayName(testimonial: Testimonial): string {
  return `${testimonial.firstName} ${testimonial.lastInitial}.`
}
