// Lắng nghe sự kiện "submit" của form với id là 'signupForm'
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form (tránh reload trang)

    // Lấy giá trị từ các trường input trong form và loại bỏ khoảng trắng ở đầu và cuối
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Kiểm tra xem các trường có được điền đầy đủ hay không
    if (!firstName) {
        alert('Please enter your first name.');
        return; // Dừng lại không tiếp tục xử lý nếu trường firstName bị bỏ trống
    }

    if (!lastName) {
        alert('Please enter your last name.');
        return; // Dừng lại không tiếp tục xử lý nếu trường lastName bị bỏ trống
    }

    if (!email) {
        alert('Please enter your email.');
        return; // Dừng lại không tiếp tục xử lý nếu trường email bị bỏ trống
    }

    if (!password) {
        alert('Please enter your password.');
        return; // Dừng lại không tiếp tục xử lý nếu trường password bị bỏ trống
    }

    // Kiểm tra định dạng của email có hợp lệ hay không thông qua hàm validateEmail
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return; // Dừng lại nếu email không hợp lệ
    }

    // Giả lập quá trình gửi form (ở đây chỉ in ra console, thực tế là gửi lên server)
    console.log('Form submitted:', { firstName, lastName, email, password });
    alert('Form submitted successfully!');

    // Chuyển hướng người dùng đến trang đăng nhập sau khi submit thành công
    window.location.href = 'login.html'; // Điều hướng đến trang login.html sau khi đăng ký thành công
});

// Hàm để kiểm tra định dạng email có hợp lệ hay không
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy kiểm tra email
    return emailRegex.test(email); // Trả về true nếu email hợp lệ, ngược lại là false
}

// Chuyển hướng đến trang login khi click vào link
document.getElementById('loginRedirect').addEventListener('click', function () {
    window.location.href = 'login.html'; // Điều hướng tới trang login khi click vào link "Already have an account"
});

// ================== Đăng ký ==================
document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy giá trị từ các trường input
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Kiểm tra thông tin nhập vào
    if (!firstName || !lastName || !email || !password) {
        alert('All fields are required.');
        return; // Dừng lại nếu có bất kỳ trường nào bị bỏ trống
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return; // Dừng lại nếu email không hợp lệ
    }

    // Lưu thông tin vào LocalStorage (giả lập cơ sở dữ liệu)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Account created successfully!');
    window.location.href = 'login.html'; // Điều hướng đến trang login sau khi đăng ký thành công
});

// ================== Đăng nhập ==================
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Kiểm tra các trường nhập liệu
    if (!email || !password) {
        alert('All fields are required.');
        return; // Dừng lại nếu có trường nào bị bỏ trống
    }

    // Lấy dữ liệu email và password đã lưu từ LocalStorage (giả lập cơ sở dữ liệu)
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Kiểm tra xem thông tin đăng nhập có đúng không
    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Điều hướng đến trang dashboard sau khi đăng nhập thành công
    } else {
        alert('Incorrect email or password.'); // Thông báo khi thông tin đăng nhập không đúng
    }
});

// ================== Chuyển hướng ==================
document.getElementById('loginRedirect')?.addEventListener('click', function () {
    window.location.href = 'login.html'; // Điều hướng đến trang login khi click vào link
});

document.getElementById('signupRedirect')?.addEventListener('click', function () {
    window.location.href = 'index.html'; // Điều hướng đến trang đăng ký khi click vào link
});

// ================== Kiểm tra định dạng Email ==================
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy kiểm tra định dạng email
    return emailRegex.test(email); // Trả về true nếu email hợp lệ, ngược lại là false
}
