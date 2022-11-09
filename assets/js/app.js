function clickedElement(cible, addClass) {
    value = $(cible).each(function(index){

        $(this).on("click",function(){
    
            $(cible).each(function(index){
                 $(cible[index]).removeClass(addClass);
            });
    
            $(this).addClass(addClass);
        })
    });

    return value;
}


$(document).ready(function(){
    //conversation list
    var conversation_item = document.querySelectorAll('.conversation_item');
    var conversation_activeClass = "border-l-2 border-red-600 bg-gradient-to-r from-red-300 to-red-100 transition-opacity";
    clickedElement(conversation_item, conversation_activeClass);

    var boxType = document.querySelectorAll('.boxType');
    var boxTypeClassActive = "bg-indigo-300 text-white";
    clickedElement(boxType, boxTypeClassActive);

    var AllconversationType = document.querySelectorAll('.conversation_type_item');
    var activeConversationTypeClass = "text-indigo-800";
    clickedElement(AllconversationType, activeConversationTypeClass);

})