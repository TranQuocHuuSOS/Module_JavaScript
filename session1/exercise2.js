function myFunction(){
    const now = new Date();
    var hour= now.getHours();
    var minute= now.getMinutes();
    var second= now.getSeconds();
    console.log( " Thể hiện giờ, phút, giây hiện tại = " +hour +":"+ minute +":"+ second );
}
myFunction();