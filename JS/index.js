$(document).ready(function () {
    var i = 1;
    $("#btnDK").click(function () {
      $("#myModal").modal();
    });

    function kiemTraMSSV() {
        var mauKT = /^[1-9]{1}[0-9]{8}$/;
        if ($("#txtMaSV").val() == "") {
          $("#tbMaSV").html("Không để trống");
          return false;
        }
        if (!mauKT.test($("#txtMaSV").val())) {
          $("#tbMaSV").html("MSSV gồm 9 số");
          return false;
        }
        $("#tbMaSV").html("*");
        return true;
      }
      $("#txtMaSV").blur(kiemTraMSSV);


    function kiemTraTen() {
        var i = 1;
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#txtHT").val() == "") {
          $("#tbHT").html("Không để trống");
          return false;
        }
        if (!mauKT.test($("#txtHT").val())) {
          $("#tbHT").html("Mỗi ký tự đầu viết hoa không sử dụng số");
          return true;
        }
        $("#tbHT").html("*");
        return true;
      }
      $("#txtHT").blur(kiemTraTen);

      function KTMail(){
        var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        if($("#txtEmail").val()==""){
            $("#tbEmail").html("* Bắt buộc nhập !");
            return false;
        }
        if(!mail.test($("#txtEmail").val())){
            $("#tbEmail").html("* Nhập đúng định dạng mail");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(KTMail);

    $("#btnSubDK").click(function () {
        if (
        kiemTraMSSV() == true &&
        kiemTraTen() == true &&
        KTMail() == true 
        ) {
          var MaSv = $("#txtMaSV").val();
          var hoten = $("#txtHT").val();
          var email = $("#txtEmail").val();
          var gioiThieu = $("#gioitinh").val()
          var nangkhieu = $("#mon").val()
          var tp = $("#slcity").val()
          var them = "<tr><td>" + (i++) + "</td><td>" + MaSv + "</td><td>" + hoten + "</td><td>" 
          + gioiThieu + "</td><td>" + nangkhieu + "</td><td>" +email +"</td><td>" + tp +"</td></tr>"
          $("#danhsach").append(them);
          $("#myModal").modal("hide");
         
        }
      });


});    