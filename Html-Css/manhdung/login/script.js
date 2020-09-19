function validate() {
    var u = document.getElementById("USERNAME").value;
    var p1 = document.getElementById("PASSWORD").value;
    
      
    if(u== "") {
        alert("Vui lòng nhập tên!");
        return false;
    }
    if(p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    if(p1  < 8) {
        alert("Mat khau toi thieu 8 ky tu");
        return false;
    }
    
    if(p1  != "12345678" && u == "manhdung") {
        alert("Sai mat khau");
        return false;
        }
    if(p1  == "12345678" && u == "manhdung") {
        alert("Dang nhap thanh cong");
        return false;
        }
    
    
    return true;
    }