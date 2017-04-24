$('.plan-level').click(function(){
    $('.buy-bar').addClass('is-active');
    $('.plan-level').removeClass('is-active');
    if ($(this).hasClass('plan-level-1')) {
        $('.plan-level-1').addClass('is-active');
        var title = $('.plan-data.plan-level-1').data("title");
        var link = $('.plan-data.plan-level-1').data("link");
        $('.buy-bar--inner strong').text(title);   
        $('.buy-bar--inner a').prop("href", link)     
    }
    if ($(this).hasClass('plan-level-2')) {
        $('.plan-level-2').addClass('is-active');
        var title = $('.plan-data.plan-level-2').data("title");
        var link = $('.plan-data.plan-level-2').data("link");
        $('.buy-bar--inner strong').text(title);  
        $('.buy-bar--inner a').prop("href", link)                      
    }
    if ($(this).hasClass('plan-level-3')) {
        $('.plan-level-3').addClass('is-active');
        var title = $('.plan-data.plan-level-3').data("title");
        var link = $('.plan-data.plan-level-3').data("link");
        $('.buy-bar--inner strong').text(title); 
        $('.buy-bar--inner a').prop("href", link)
    }
    if ($(this).hasClass('plan-level-4')) {
        $('.plan-level-4').addClass('is-active');  
        var title = $('.plan-data.plan-level-4').data("title");
        var link = $('.plan-data.plan-level-4').data("link");        
        $('.buy-bar--inner strong').text(title);  
        $('.buy-bar--inner a').prop("href", link)
                 
    }
    if ($(this).hasClass('plan-level-5')) {
        $('.plan-level-5').addClass('is-active');    
        var title = $('.plan-data.plan-level-5').data("title");
        var link = $('.plan-data.plan-level-5').data("link");
        $('.buy-bar--inner strong').text(title); 
        $('.buy-bar--inner a').prop("href", link)    
    }
});

$('.buy-bar--close').click(function(){
    $('.buy-bar').removeClass('is-active');
    $('.plan-level').removeClass('is-active');    
});