let conversation = document.getElementById('conversation');

window.addEventListener('load', function(){
    conversation.scrollTop = 0;
    setTimeout(function(){
        conversation.scrollTop = 10000;
    }, 1000)
});

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


function sendMessage(){
   
    conversation.scrollTop = conversation.scrollTop + 10000;
    value = () => {
        message = $(".messageTo").val();

        text = '<div class="user w-full flex justify-end my-1"><span class="py-2 px-2 max-w-md bg-slate-200 rounded-t-xl rounded-l-xl text-xs">' + message + "</span></div>";
        
        $(".tchat_item").append(text);
        $(".messageTo").val("");
    }

    return value();

}

$(document).ready(function(){

    var conversation_item = $('.conversation_item');
    var conversation_activeClass = "border-l-2 border-red-600 bg-gradient-to-r from-red-300 to-red-100 transition-opacity";
    clickedElement(conversation_item, conversation_activeClass);

    var boxType = $('.boxType');
    var boxTypeClassActive = "bg-indigo-300 text-white";
    clickedElement(boxType, boxTypeClassActive);

    var AllfilterConversationType = $('.filter_type_item');
    var filterConversationTypeClass = "text-indigo-800";

    (function (AllfilterConversationType, filterConversationTypeClass) {
        value = $(AllfilterConversationType).each(function(index){
    
            $(this).on("click",function(){
                $(AllfilterConversationType).each(function(index){
                     $(AllfilterConversationType[index]).removeClass(filterConversationTypeClass);
                     $(AllfilterConversationType[index].children).last().addClass('hidden');
                });
                
                $(this).addClass(filterConversationTypeClass);
                $(this.children).last().removeClass('hidden');
            })
        });
    })(AllfilterConversationType, filterConversationTypeClass);

    $(".submitSearch").on("click", function(e){
        e.preventDefault();
        $(".inputsearch").toggleClass("transition duration-500 w-0 hidden");
        $(".inputsearch").val("");
    })

    /*
    ***************************
    search conversation function
    ****************************
    */
    $(".inputsearch").on("keyup",function(){
        value = $(this).val().toLowerCase();
        $(".list_conversation .conversation_item").filter(function(){

            $(this).children().toggle($(this).children().text().toLowerCase().indexOf(value) >-1);

            if($(this).children().text().toLowerCase().indexOf(value)==-1) {
                $(this).hide();
                $(".conversation_type").hide();
            }else{
                $(this).show()
                $(".conversation_type").show();
            }
        });
    });

    $(".inputsearch").on("focusout", function(){
        $(this).val("");
        $(this).addClass("hidden");
    })

    /**
     * Send message function
     */

    $(".submitMessageTo").click(function(){
        sendMessage();
    });

    $('.messageTo').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
          sendMessage();
          conversation.scrollTop = conversation.scrollTop + 10000;
        }
    })


})