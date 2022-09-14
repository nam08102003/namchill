const contentFilter = [
  {
    name: "Sắp xếp",
    children: [
      { name: "Sắp xếp", value: "sort" },
      { name: "Mới nhất", value: "new" },
      { name: "Xem nhiều", value: "sees" },
      { name: "Mới cập nhật", value: "new-update" },
    ],
    id: "sort",
    nameEng: "sort",
  },
  {
    name: "Định dạng",
    children: [
      { name: "Định dạng", value: "formality" },
      { name: "Phim bộ", value: "tv-series" },
      { name: "Phim lẻ", value: "single-movie" },
    ],
    id: "type",
    nameEng: "formality",
  },
  {
    name: "Tình trạng",
    children: [
      { name: "Tình trạng", value: "status" },
      { name: "Trailer", value: "trailer" },
      { name: "Đang phát", value: "playing" },
      { name: "Hoàn thành", value: "complete" },
    ],
    id: "status",
    nameEng: "status",
  },
  {
    name: "Quốc gia",
    children: [
      { name: "Quốc gia", value: "nation" },
      { name: "Việt Nam", value: "vietnam" },
      { name: "Châu Âu", value: "euro" },
      { name: "Châu Mỹ", value: "america" },
    ],
    id: "nation",
    nameEng: "nation",
  },
  {
    name: "Năm phát hành",
    children: [
      { name: "Năm phát hành", value: "year" },
      { name: "2023", value: "2023" },
      { name: "2022", value: "2022" },
    ],
    id: "release",
    nameEng: "year",
  },
  {
    name: "Thể loại",
    children: [
      { name: "Thể loại", value: "category" },
      { name: "Anime", value: "anime" },
      { name: "Hành động", value: "action" },
      { name: "Võ thuật", value: "kungfu" },
      { name: "Cổ trang", value: "antiques" },
    ],
    id: "category",
    nameEng: "category",
  },
];

export default contentFilter;
