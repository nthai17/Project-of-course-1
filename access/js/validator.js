
function Validator(option) {

    // lấy form
   let formValidate = document.querySelector(option.form);

    // hàm xử lí khi blur khỏi input
   function handleBlurInput(inputElement, rule){
    let errorElement = inputElement.parentElement.querySelector(option.errorSeclector);
    let errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('isvalid')
        } else {
            errorElement.innerText = '';
        };
   };
    // 
   if (formValidate) {
    //    Duyệt qua mỗi rule trong đối tượng option
        option.rules.forEach((rule) => {
            let inputElement = formValidate.querySelector(rule.selector);
            if (inputElement){
                // lắng nghe sự kiện blur trên input element - cảnh báo điền đủ thông tin
                inputElement.onblur = function () {
                    //hàm xử lý được khai báo bên trên - nhận input và rule tương ứng
                    handleBlurInput(inputElement, rule)
                };
                // Lắng nghe sự kiện oninput trên input element - bỏ cảnh báo khi đang điền
                inputElement.oninput = function() {
                    // lấy phần tử để hiện thông báo
                    let errorElement = inputElement.parentElement.querySelector(option.errorSeclector);
                    inputElement.parentElement.classList.remove('isvalid')
                    errorElement.innerText = '';
                };
            };
        });
   };
};

// xử lý lấy content cho cảnh báo với input name
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng nhập thông tin.'
        }
    };
};
// xử lý lấy content cho cảnh báo với input password
Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : `Mật khẩu tối thiểu ${min} kí tự.`
        }
    };
};
// xử lý lấy content cho cảnh báo với input email
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function(value){
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng email.'
        }
    };
};
