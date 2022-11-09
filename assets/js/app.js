$(document).ready(function(){
    //Animation in sidebar2 conversation  list
    var conversation_item = document.querySelectorAll('.conversation_item');
    var conversation_activeClass = "border-l-2 border-red-600 bg-gradient-to-r from-red-300 to-red-100 transition-opacity";
    
    //Addclass
    $(".conversation_item").each(function(index){
        $(this).on("click",function(){

            $(".conversation_item").each(function(index){
                 $(conversation_item[index]).removeClass(conversation_activeClass);
            });

            $(this).addClass(conversation_activeClass);
        })
    });
})