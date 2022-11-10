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

    var conversation_item = $('.conversation_item');
    var conversation_activeClass = "border-l-2 border-red-600 bg-gradient-to-r from-red-300 to-red-100 transition-opacity";
    clickedElement(conversation_item, conversation_activeClass);

    var boxType = $('.boxType');
    var boxTypeClassActive = "bg-indigo-300 text-white";
    clickedElement(boxType, boxTypeClassActive);

    var AllconversationType = $('.conversation_type_item');
    var activeConversationTypeClass = "text-indigo-800";
    clickedElement(AllconversationType, activeConversationTypeClass);

    (function (AllconversationType, activeConversationTypeClass) {
        value = $(AllconversationType).each(function(index){
    
            $(this).on("click",function(){
                $(AllconversationType).each(function(index){
                     $(AllconversationType[index]).removeClass(activeConversationTypeClass);
                     $(AllconversationType[index].children).last().addClass('hidden');
                });
                
                $(this).addClass(activeConversationTypeClass);
                $(this.children).last().removeClass('hidden').stop();
            })
        });
    })(AllconversationType, activeConversationTypeClass);

    $(".submitSearch").on("click", function(e){
        e.preventDefault();
        $(".message").toggleClass("ml-5");
        $(".inputsearch").toggleClass("w-0 hidden");
    })
})