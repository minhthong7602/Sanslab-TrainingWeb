function login() {
  var username = $('#username').val();
  var password = $('#password').val();
  if(!username) {
    alert(`Username không được để trống yêu cầu nhập lại`);
    return;
  }

  if(password && password.length < 6) {
    alert(`Password yêu cầu 6 ký tự`);
    return;
  }

  if(username !== 'minhthong') {
    alert(`Tài khoản không tồn tại`);
    return;
  }

  if(password !== '12345678') {
    alert(`Password không đúng`);
    return;
  }

  alert(`Login thành công`);
}