/**
 * Khai báo biến 
 * - khai báo biến với let và const
 * - so sánh giữa let, const và var (hoisting)
 *  + var: có hoisting, function scope
 *  + let, const: không có hoisting, block scope(phạm vi nhỏ hơn)
 *  + const: bắt buộc gán value khi khai báo và không thể re-assign giá trị
 * - nên dùng cái nào trong trường hợp nào
 *  + var: khi browser không hỗ trợ let,const (InternetExplore)
 *  + let: khi cần re-assign giá trị
 *  + const: khi không cần re-assign giá trị
 */

// var 
// console.log(fullName); //Work (undefined)
// fullName = 'Ta Thanh Lan';
// console.log(fullName); //Work (Ta Thanh Lan)
// var fullName = 'Ta Thanh Long';
// var fullName = 'ThanhLong' // ghi đè mà k tốn thêm bộ nhớ
// console.log(fullName); 

// function showErrorWithVar(){
//     var isError = true;
//     var error = '';

//     if (isError){
//         var error = 'Something went wrong';
//         console.log(error);
//     }

//     console.log(error);
// }

// showErrorWithVar();

// Let
// console.log(age); // toang (err: cannot access 'age' before initialization)
// let age = 18;
// age = 19;
// console.log(age); // work(19)
// let age = 20; // Toang (err: Identifier 'age' has already been declared)

// function showErrorWithLet(){
//     let isError = true;
//     let error = '';

//     if (isError){
//         let error = 'Something went wrong';
//         console.log(error);
//     }

//     console.log(error);
// }

// showErrorWithLet();

// const
// console.log(birthYear); // Lỗi( không có hoisting)
// const birthYear; // Toang (bắt buộc phải gán giá trị khi khai báo)
// const birthYear = 1999;
// birthYear = 2000; // Toang( không thể gán lại giá trị mới cho const)

// function showErrorWithConst(){
//     const isError = true;
//     const error = '';

//     if (isError){
//         const error = 'Something went wrong';
//         console.log(error);
//     }

//     console.log(error);
// }

// showErrorWithConst();

/**
 * Function 
 * - Arrow function
 * - so sánh declaration .vs expression (normal function) .vs arrow function(cú pháp, con trỏ this)
 */

// expression function
// const calcAgeNormal = function(birthYear){
//     console.log(this);
//     return 2021 - birthYear;
// }

// calcAgeNormal();

// Arrow function
// - Không định nghĩa bối cảnh thực thi(this) của riêng nó
// - không qtâm nó được thực thi trong ngữ cảnh nào, giá trị this của arrow func = this của outer function
// - Nếu nó không có outer func thì this = global object(window)
// - không dùng arrow func để làm constructor function và làm method của object
// const calcAgeArrow = (birthYear) => {
//     console.log(this);
//     console.log(2021 - birthYear);
// }

// calcAgeArrow(1999);

// const calcAgeArrowShort = (birthYear) => 2021 - birthYear;

// const calcAgeOneParam = birthYear => 2021 - birthYear;

// const Student = () => {

// }

// var long = new Student(); // lỗi (Student is not a constructor)

const student = {
   name: 'Long',
   birthYear: 1999,

   calcAgeNormal: function() {
       console.log('calcAgeNormal' ,this);
       console.log(2021 - this.birthYear);

    //    const _this = this;

    //    const checkAgeNormal = function() {
    //        console.log('calcAgeNormal', this.birthYear);
    //        if(2021 - this.birthYear >= 18){
    //         console.log('You are old enough');
    //        } else{
    //            console.log('You are not old enough');
    //        }
    //    }.bind(student)
    //    checkAgeNormal();

    const checkAgeArrow =() => {
        console.log('calcAgeNormal', this.birthYear);
        if(2021 - this.birthYear >= 18){
         console.log('You are old enough');
        } else{
            console.log('You are not old enough');
        }
    };

    checkAgeArrow();
   },
   // không dùng arrow func làm phương thức của object
   calcAgeArrow: () => {
       console.log(window.birthYear);
       console.log(2021 - window.birthYear);
   }
}

// student.calcAgeNormal();
// student.calcAgeArrow();

/**
 * Default Parameter
 */
const withoutDefaultParam = (typeOfUser) => {
    if(typeOfUser === 'user'){
        console.log('Redirect to user page');
    }else {
        console.log('Redirect to admin page');
    }
}

// withoutDefaultParam('admin');

const withDefaultParam = (typeOfUser = 'user') => {
    if(typeOfUser === 'user'){
        console.log('Redirect to user page');
    }else {
        console.log('Redirect to admin page');
    }
}

    // withDefaultParam();
    // withDefaultParam('admin');

/**
 * Destructuring
 *  - Destructure Array
 *  - Destructure Object
*/

// with Array
// without destructuring
// const students = ['long', 'huy', 'hoang'];
// const long = student[0];
// const huy = student[1];
// console.log(long, huy);

//with destructuring
// const students = ['long', 'hoang', 'huy'];
// const [long, hoang, huy] = students;
// const [long, , huy] = students;
// console.log(long, hoang, huy);

//Object
//without destructuring
// const _student = {
//     fullName: 'long',
//     age: 22,
//     class: 'BC12'
// }
// const name = _student.fullName;
// const age = _student.age;
// console.log(fullName, age);

//with destructuring
// const _student = {
//     fullName: 'long',
//     age: 22,
//     class: 'BC12'
// }
// const {fullName, class: className} = _student;
// console.log(fullName, className);

/**
 * Template String
 */

const fullName = 'Thanh Long';
const str = 'My name is' + fullName;
const templateStr = `My name is ${fullName}`;


/**
 * Enhanced Object Literals (Shorthand syntax)
 */

// const age = 18;

// const person = {
//     fullName: 'thanh long',
//     age, // age: age,(key giống nhau sẽ tự hiểu)

//     calcAge(){
//         return 2021 - this.age;
//     }
// }

// console.log(person);