
// 信息公开表格
$('.XXGKTable li').each(function (inex, item) {
    if ($(item).find('p').text().replace(/(^\s*)|(\s*$)/g, "") == '' || $(item).find('p').text().replace(/(^\s*)|(\s*$)/g, "") == '-') {
        $(this).remove()
    }
})
if ($('.XXGKTable li').length % 2 != 0) {
    $('.XXGKTable li:last').css('width', '100%')
    $('.XXGKTable li:last').find('span').css('width', '15%')
    $('.XXGKTable li:last').find('p').css('width', '85%')
}
// 当前位置去掉table
var currentA = '当前位置：'
$('.currpos').find('a').map(function (index) {
    if (index > 0) {
        currentA += ' > ' + $(this)[0].outerHTML
    } else {
        currentA += $(this)[0].outerHTML
    }
})
$('.currpos').html(currentA)

// 文章页来源判断
$('.artic_tother_left .source').each(function(index,item){
    if($(item).text() == '来源：'){
        $(item).css('display','none')
    }
})