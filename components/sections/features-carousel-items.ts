export type StandardWorksSlide = {
  title: string
  description: string
  image: string
  imageClassName?: string
}

export const STANDARD_WORKS_SLIDES: StandardWorksSlide[] = [
  {
    title: "The Old Testament",
    description:
      "from the creation through the prophets. Covenant, exile, and the hope of Israel.",
    image:
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-ot_opt_ej25p7.webp",
  },
  {
    title: "The New Testament",
    description:
      "with the Gospels and letters that testify of Jesus Christ and His church.",
    image:
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-nt_opt_fegtbz.webp",
  },
  {
    title: "The Book of Mormon",
    description:
      "is another witness of Christ, from Lehi's vision to Moroni's last invitation.",
    image:
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790805305/verses-website/card-bm_opt_rlsias.webp",
  },
  {
    title: "The Doctrine and Covenants",
    description:
      "holds Restoration revelations on priesthood, Zion, and how the Church was organized.",
    image:
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-dc_opt_n4vnqa.webp",
  },
  {
    title: "The Pearl of Great Price",
    description:
      "includes Moses, Abraham, and Joseph Smith's history, with the Articles of Faith.",
    image:
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-pg_opt_wbsy5k.webp",
  },
  {
    title: "The Family Proclamation",
    description:
      "is a concise witness of marriage, family, and God's plan for His children.",
    image:
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-pc_opt_gbbv1k.webp",
    imageClassName: "opacity-50",
  },
  {
    title: "Prayers & Ordinances",
    description:
      "offers words and patterns for ordinances, blessings, and daily prayer.",
    image:
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790805303/verses-website/card-po_opt_csxnry.webp",
  },
  {
    title: "The Missionaries",
    description: "and how to find representatives in your area.",
    image:
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790805304/verses-website/card-ms_opt_fsk9ej.webp",
  },
] as const
