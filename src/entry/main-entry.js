
$('#dialog button:first-child').on('click', () => {
    $('#myModal').modal('show');
}
);


$('#submit').on('click', () => {
    // jQuery ajax调用可以放在这里
    // 获取参数比如
   var name =  $('#name').val();   //
   console.log(name);
});
