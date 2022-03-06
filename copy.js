    $(document).ready(function(){
        $(".prathyoush-face").click(function(event){
        var $tempElement = $("<input>");
            $("body").append($tempElement);
            $tempElement.val($(this).closest(".prathyoush-face").find(".prathyoush-copy").text()).select();
            document.execCommand("Copy");
            $tempElement.remove();
           
        });
        $(".prathyoush-face").click(function () {
            $("#prathyoush-alert").show().delay(100).fadeOut();        
          
                });
        
    
        
    });
