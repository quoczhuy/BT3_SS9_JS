// 1. Khởi tạo danh sách phòng (Initial Read)
const hotelRooms = [
  {
    roomId: "P101",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "VACANT",
  },
  {
    roomId: "P102",
    roomType: "Deluxe Ocean View",
    pricePerNight: 1500000,
    status: "VACANT",
  },
  {
    roomId: "P103",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "MAINTENANCE",
  },
];

// Hàm hỗ trợ in danh sách phòng dạng bảng ra Console
function inDanhSachPhong(tieuDe) {
  console.log(`\n--- ${tieuDe} ---`);
  console.table(hotelRooms);
}

inDanhSachPhong("DANH SÁCH PHÒNG BAN ĐẦU");

// 2. Thêm phòng mới (Create)
const phongMoi = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT",
};
hotelRooms.push(phongMoi);

inDanhSachPhong("SAU KHI THÊM PHÒNG P104");

// 3. Cập nhật trạng thái phòng (Update)
// Yêu cầu: Khách check-in phòng P101, đổi trạng thái từ "VACANT" thành "OCCUPIED"
const indexCanCapNhat = hotelRooms.findIndex(
  (phong) => phong.roomId === "P101",
);

if (indexCanCapNhat !== -1) {
  hotelRooms[indexCanCapNhat].status = "OCCUPIED";
  console.log(
    "\n-> Đã cập nhật thành công trạng thái phòng P101 thành OCCUPIED.",
  );
} else {
  console.log("\n-> Không tìm thấy phòng P101 để cập nhật.");
}

inDanhSachPhong("SAU KHI CẬP NHẬT TRẠNG THÁI P101");

// 4. Xóa phòng (Delete)
// Yêu cầu: Phòng P103 ngừng phục vụ, xóa khỏi mảng bằng splice
const indexCanXoa = hotelRooms.findIndex((phong) => phong.roomId === "P103");

if (indexCanXoa !== -1) {
  hotelRooms.splice(indexCanXoa, 1);
  console.log("\n-> Đã xóa thành công phòng P103 khỏi hệ thống.");
} else {
  console.log("\n-> Không tìm thấy phòng P103 để xóa.");
}

inDanhSachPhong("SAU KHI XÓA PHÒNG P103");
