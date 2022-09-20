const navLinks = [
  { name: "NamChill", href: "/", dropdown: false },
  {
    name: "Thể loại",
    href: "/",
    dropdown: true,
    children: [
      { name: "Hành động", href: "/action" },
      { name: "Anime", href: "/anime" },
      { name: "Khoa học", href: "/science" },
      { name: "Âm nhạc", href: "/music" },
      { name: "Võ Thuật", href: "/kungfu" },
    ],
  },
  {
    name: "Quốc gia",
    href: "/",
    dropdown: true,
    children: [
      { name: "Việt Nam", href: "/vietnam" },
      { name: "Châu Âu", href: "/europe" },
      { name: "Trung Quốc", href: "/china" },
      { name: "Nhật Bản", href: "/japan" },
      { name: "Hàn Quốc", href: "/korean" },
      { name: "Mỹ", href: "/usa" },
    ],
  },
  { name: "Phim bộ", href: "/series", dropdown: false },
  { name: "Phim lẻ", href: "/odd", dropdown: false },
  { name: "Phim chiếu rạp", href: "/theater", dropdown: false },
  { name: "Phim mới", href: "/news", dropdown: false },
  { name: "Phim sắp chiếu", href: "/upcoming", dropdown: false },
];

export default navLinks;
