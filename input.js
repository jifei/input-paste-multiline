
$("body").delegate("input:text","paste",function(e){  
    e.preventDefault();
    var $this=$(this);
    setTiemout(function(){ 
        var text=window.clipboardData.getData('text').replace(/[\r\n]/g,"");
        $this.val(text);
        return false; 
    },20);
    //20ms是为了jquery在捕获粘贴事件时获取到数据
});
