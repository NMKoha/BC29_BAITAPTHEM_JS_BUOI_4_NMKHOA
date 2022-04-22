/**Bài tập 1
 * - Đầu vào: Nhập vào ngày, tháng năm
 * 
 * - Xử lý:
 * +Tạo biến: ngay, thang, nam, ngayKeTiep, thangKeTiep, namKeTiep, ngayTruoc, thangTruoc, namTruoc
 * +Lấy số liệu người dùng nhập vào gán vào ngay, thang, nam
 * 
 * +Tính ngày tháng năm của ngày tiếp theo:
 * Nếu nam%4==0 && thang==2   //năm nhuận
 *     nếu ngay==29 => namKeTiep=nam
 *                         thangKeTiep=thang+1
 *                         ngayKeTiep=1
 *     else => namKeTiep=nam
 *             thangKeTiep=thang
 *             NgayKeTiep=ngay+1
 * Else Nếu ngay==31 && thang==12 => namKeTiep= nam+1
 *                               thangKeTiep=1
 *                               ngayKeTiep=1
 * Else Nếu ngay==31&&thang==1 ||  ngay==28&&thang==2 || ngay==31&&thang==3
 * || ngay==30&&thang==4 || ngay==31&&thang==5 || ngay==30&&thang==6
 * || ngay==31&&thang==7 || ngay==31&&thang==8 || ngay==30&&thang==9
 * || ngay==31&&thang==10 || ngay==30&&thang==11 
 *                      => namKeTiep=nam
 *                         thangKeTiep=thang+1
 *                         ngayKeTiep=1
 * Else namKeTiep=nam
 *      thangKeTiep=thang
 *      NgayKeTiep=ngay+1
 *
 *+Tính ngày tháng năm của ngày trước đó:
 * Nếu nam%4==0 && thang==3   //năm nhuận
 *     nếu ngay==1 => namTruoc=nam
 *                    thangTruoc=thang-1
 *                    ngayTruoc=29
 *     else => namTruoc=nam
 *             thangTruoc=thang
 *             ngayTruoc=ngay-1
 * Else Nếu ngay==1 && thang==1 => namTruoc= nam-1
 *                               thangTruoc=12
 *                               ngayTruoc=31
 * Else Nếu ngay==1&&thang==2 ||  ngay==1&&thang==4 || ngay==31&&thang==6
 * || ngay==1&&thang==8 || ngay==1&&thang==9 || ngay==1&&thang==11
 * 
 *                      => namKeTiep=nam
 *                         thangKeTiep=thang-1
 *                         ngayKeTiep=31
 * Else Nếu ngay==1&&thang==5 ||  ngay==1&&thang==7 || ngay==31&&thang==10
 * || ngay==1&&thang==12
 * 
 *                      => namKeTiep=nam
 *                         thangKeTiep=thang-1
 *                         ngayKeTiep=30
 * Else namKeTiep=nam
 *      thangKeTiep=thang
 *      NgayKeTiep=ngay-1 
 * 
 * +Xuất kết quả ra UI
 * 
 * - Đầu ra: Ngày tháng năm là ngày tiếp theo
 * Ngày tháng năm là ngày trước đó                
 */



document.getElementById("btnBaiTap1").onclick = function() {
    //lấy giá trị người dùng nhập vào
    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;
    //khai báo
    var ngayKeTiep;
    var thangKeTiep;
    var namKeTiep;
    var ngayTruoc;
    var thangTruoc;
    var namTruoc;
    var result = "";
    var result1 = "";
    //tính ngày kế tiếp
    if (nam % 4 == 0 && thang == 2) {
        if (ngay == 29) {
            namKeTiep = nam;
            thangKeTiep = thang + 1;
            ngayKeTiep = 1;
        } else {
            namKeTiep = nam;
            thangKeTiep = thang;
            ngayKeTiep = ngay + 1;
        }
    } else if (ngay == 31 && thang == 12) {
        namKeTiep = nam + 1;
        thangKeTiep = 1;
        ngayKeTiep = 1;
    } else if ((ngay == 31 && thang == 1) || (ngay == 28 && thang == 2) || (ngay == 31 && thang == 3) ||
        (ngay == 30 && thang == 4) || (ngay == 31 && thang == 5) || (ngay == 30 && thang == 6) ||
        (ngay == 31 && thang == 7) || (ngay == 31 && thang == 8) || (ngay == 30 && thang == 9) ||
        (ngay == 31 && thang == 10) || (ngay == 30 && thang == 11)) {
        namKeTiep = nam;
        thangKeTiep = thang + 1;
        ngayKeTiep = 1;
    } else if (ngay > 31 || ngay < 1 || thang > 12 || thang < 1 || nam > 9999 || nam < 1) {
        result1 = "Hãy nhập đúng định dạng ngày tháng năm!";
    } else {
        namKeTiep = nam;
        thangKeTiep = thang;
        ngayKeTiep = ngay + 1;
    }
    // tính ngày trước đó
    if (nam % 4 == 0 && thang == 3 && ngay == 1) {
        namTruoc = nam;
        thangTruoc = thang - 1;
        ngayTruoc = 29;
    } else if (ngay == 1 && thang == 3) {
        namTruoc = nam;
        thangTruoc = thang - 1;
        ngayTruoc = 28;
    } else if (ngay == 1 && thang == 1) {
        namTruoc = nam - 1;
        thangTruoc = 12;
        ngayTruoc = 31;
    } else if ((ngay == 1 && thang == 2) || (ngay == 1 && thang == 4) || (ngay == 1 && thang == 6) ||
        (ngay == 1 && thang == 8) || (ngay == 1 && thang == 9) || (ngay == 1 && thang == 11)) {
        namTruoc = nam;
        thangTruoc = thang - 1;
        ngayTruoc = 31;
    } else if ((ngay == 1 && thang == 5) || (ngay == 1 && thang == 7) || (ngay == 1 && thang == 10) ||
        (ngay == 1 && thang == 12)) {
        namTruoc = nam;
        thangTruoc = thang - 1;
        ngayTruoc = 30;
    } else if (ngay > 31 || ngay < 1 || thang > 12 || thang < 1 || nam > 9999 || nam < 1) {
        result1 = "Hãy nhập đúng định dạng ngày tháng năm!";
    } else {
        namTruoc = nam;
        thangTruoc = thang;
        ngayTruoc = ngay - 1;
    }
    //show kq ra UI
    result = "Ngày " + ngayKeTiep + " tháng " + thangKeTiep + " năm " + namKeTiep + " là ngày tiếp theo!" +
        "</br>" + "Ngày " + ngayTruoc + " tháng " + thangTruoc + " năm " + namTruoc + " là ngày trước đó!"
    document.getElementById("divInfo1").innerHTML = result + "</br>" + result1;
}

/**
 * Bài tập 2
 * 
 * -Đầu vào: Nhập ngày, tháng
 * 
 * -Xử lý: 
 * +Tạo biến: thang, nam, soNgay
 * +Lấy số liệu người dùng nhập vào gán vào thang, nam
 * +Tính số ngày của tháng:
 * Nếu nam%4==0 && thang==2
 *      => soNgay=29    
 * Nếu thang == 1|| thang ==3 || thang==5 ||thang==7||thang==8||thang==10|thang==12
 *  => soNgay=31
 * Nếu thang==4||thang==6||thang==9||thang==11
 * =>soNgay=30
 *      nguoc lai soNgay=28
 * +Xuất kq ra UI
 * 
 * -Đầu ra: số ngày của tháng
 *      
 */

document.getElementById("btnBaiTap2").onclick = function() {
    //lấy giá trị người dùng nhập vào
    var thang1 = document.getElementById("thang1").value * 1;
    var nam1 = document.getElementById("nam1").value * 1;
    var soNgay;
    var result2 = "";
    //tính ngày
    if (nam1 % 4 === 0 && thang1 === 2) {
        soNgay = 29;
    } else if (thang1 == 1 || thang1 == 3 || thang1 == 5 || thang1 == 7 || thang1 == 8 || thang1 == 10 | thang1 == 12) {
        soNgay = 31;
    } else if (thang1 == 4 || thang1 == 6 || thang1 == 9 || thang1 == 11) {
        soNgay = 30;
    } else if (thang1 < 1 || thang1 > 12) {
        soNgay = "nhập sai tháng!";
    } else {
        soNgay = 28;
    }
    //in kết quả ra UI
    result2 = "Số ngày của tháng là: " + soNgay;
    document.getElementById("divInfo2").innerHTML = result2;
}

/**
 * Bài tập 3
 * -Đầu vào: nhập số nguyên có 3 chữ số
 * 
 * -Xử lý:
 * +tạo biến so, hàngTram, hangChuc, hangDonVi, docHangTram, docHangChuc, docDonVi, result3
 * +lấy dữ liệu người dùng nhập gán vào so
 * +tính hàng trăm, hàng chục, hàng đơn vị của so:
 *      var hangTram = Math.floor(so / 100);   lấy so chia 100, làm tròn về số nhỏ hơn
 *      var hangChuc = (Math.floor(so / 10) % 10);   lay so chia 10, làm tròn về số nhỏ hơn sau đó chia cho 10 lấy số dư  
 *      var hangDonVi = so % 100 % 10;  lấy so chia 100 lấy số dư rồi chia tiếp cho 10 lấy số dư
 * +đọc hàng trăm:
 *      1=> một trăm
 * .....
 *      9=> chín trăm
 *      0=>lỗi
 * +đọc hàng chục:
 *      0=>lẻ
 *      1=>mười
 *      2=>hai mươi
 *      ....
 *      9=>chín mươi
 *      nếu hangChuc==0&&hangDonVi==0 => gán chuỗi rỗng cho docHangChuc và docDonVi
 * +đọc hàng đơn vị:
 *      0=> gán chuỗi rỗng
 *      1=> một
 *      ....
 *      9=>9
 * + in kết quả ra UI
 * 
 * - Đầu ra: cách đọc của số vừa nhập
 */

document.getElementById("btnBaiTap3").onclick = function() {
    //Dom tới thẻ input lấy giá trị người dùng nhập
    var so = document.getElementById("so").value * 1;
    var hangTram = Math.floor(so / 100);
    var hangChuc = ((Math.floor(so / 10)) % 10);
    var hangDonVi = so % 100 % 10;
    //tạo biến
    var docHangTram = "";
    var docHangChuc = "";
    var docDonVi = "";
    var result3 = "";
    //đọc hàng trăm
    if (hangTram == 1) {
        docHangTram += "Một trăm ";
    } else if (hangTram == 2) {
        docHangTram += "Hai trăm ";
    } else if (hangTram == 3) {
        docHangTram += "Ba trăm ";
    } else if (hangTram == 4) {
        docHangTram += "Bốn trăm ";
    } else if (hangTram == 5) {
        docHangTram += "Năm trăm ";
    } else if (hangTram == 6) {
        docHangTram += "Sáu trăm ";
    } else if (hangTram == 7) {
        docHangTram += "Bảy trăm ";
    } else if (hangTram == 8) {
        docHangTram += "Tám Trăm ";
    } else if (hangTram == 9) {
        docHangTram += "Chín Trăm ";
    } else {
        docHangTram += "Lỗi";
    }

    //đọc hàng chục
    if (hangChuc == 1) {
        docHangChuc += "mười ";
    } else if (hangChuc == 2) {
        docHangChuc += "hai mươi ";
    } else if (hangChuc == 3) {
        docHangChuc += "ba mươi ";
    } else if (hangChuc == 4) {
        docHangChuc += "bốn mươi ";
    } else if (hangChuc == 5) {
        docHangChuc += "năm mươi ";
    } else if (hangChuc == 6) {
        docHangChuc += "sáu mươi ";
    } else if (hangChuc == 7) {
        docHangChuc += "bảy mươi ";
    } else if (hangChuc == 8) {
        docHangChuc += "tám mươi ";
    } else if (hangChuc == 9) {
        docHangChuc += "chín mươi ";
    } else if (hangChuc == 0 && hangDonVi == 0) {
        docHangChuc += "";
    } else {
        docHangChuc += "lẻ ";
    }
    //đọc hàng đơn vị
    if (hangDonVi == 1) {
        docDonVi += "một";
    } else if (hangDonVi == 2) {
        docDonVi += "hai";
    } else if (hangDonVi == 3) {
        docDonVi += "ba";
    } else if (hangDonVi == 4) {
        docDonVi += "bốn";
    } else if (hangDonVi == 5) {
        docDonVi += "năm";
    } else if (hangDonVi == 6) {
        docDonVi += "sáu";
    } else if (hangDonVi == 7) {
        docDonVi += "bảy";
    } else if (hangDonVi == 8) {
        docDonVi += "tám";
    } else if (hangDonVi == 9) {
        docDonVi += "chín";
    } else {
        docDonVi += "";
    }
    //in kq ra Ui
    result3 = so + " đọc là: " + docHangTram + docHangChuc + docDonVi;
    console.log(result3);
    document.getElementById("divInfo3").innerHTML = result3;
}


/**
 * Bài tập 4
 * 
 * -Đầu vào: toạ độ trường, toạ độ 3 sinh viên
 * 
 * -Xử lý:
 * +Tạo biến: xT, yT, sinhVien1, xA,yA, sinhVien2, xB,yB, sinhVien3, xC,yC,AT,BT,CT,result4
 * +Lấy giá trị người dùng nhập vào gán cho các biến
 * +Tính khoảng cách của các sinh viên đến trường:
 *    khoảng cách sinhVien1 đến trường: AT = (Mart.sqrt((xA-xTruong)*(xA-xTruong)+(yA-yTruong)*(yA-yTruong)))
 *      tương tự tính khoảng cách sinhVien2 và sinhVien3 đến trường
 * +So sánh các khoảng cách: AT, BT, CT tìm số lớn nhất => gán tên của sinh viên cho result4
 * +In kết quả ra UI
 * 
 * -Đầu ra: Sinh viên xa trường nhất
 */
//hàm Dom tới các element lấy giá trị
function getMyEle(ele) {
    return document.getElementById(ele);
}
//hàm tính khoảng cách
function khoangCach(a, b, c, d) {
    return (Math.sqrt((a - b) * (a - b) + (c - d) * (c - d)));
}

// hàm so sánh 2 số
function soSanh(a, b) {
    var m;
    if (a > b) {
        m = a;
    } else {
        m = b
    }
    return m;
}
getMyEle("btnBaiTap4").onclick = function() {
    //lấy giá trị người dùng nhập gán vào các biến
    var xT = getMyEle("xTruong").value * 1;
    var yT = getMyEle("yTruong").value * 1;
    var xA = getMyEle("xA").value * 1;
    var yA = getMyEle("yA").value * 1;
    var sinhVien1 = getMyEle("sinhVien1").value;
    var xB = getMyEle("xB").value * 1;
    var yB = getMyEle("yB").value * 1;
    var sinhVien2 = getMyEle("sinhVien2").value;
    var xC = getMyEle("xC").value * 1;
    var yC = getMyEle("yC").value * 1;
    var sinhVien3 = getMyEle("sinhVien3").value;
    var result4 = "";
    // tính khoảng cách
    var AT = khoangCach(xA, xT, yA, yT);
    var BT = khoangCach(xB, xT, yB, yT);
    var CT = khoangCach(xC, xT, yC, yT);

    // so sánh các khoảng cách:
    var max1 = soSanh(AT, BT);
    var max2 = soSanh(AT, CT);
    var max = soSanh(max1, max2)

    // gán tên sinh viên cho biến result4
    if (max == BT && max == CT && max == AT) {
        result4 += "Các sinh viên xa như nhau";
    } else if (max == AT && max == BT) {
        result4 += sinhVien1 + " và " + sinhVien2;
    } else if (max == AT && max == CT) {
        result4 += sinhVien1 + " và " + sinhVien3;
    } else if (max == BT && max == CT) {
        result4 += sinhVien2 + " và " + sinhVien3;
    } else if (max == AT) {
        result4 += sinhVien1;
    } else if (max == BT) {
        result4 += sinhVien2;
    } else if (max == CT) {
        result4 += sinhVien3;
    } else {
        result4 += "Lỗi";
    }
    getMyEle("divInfo4").innerHTML = "Sinh viên xa trường nhất: " + result4;
}