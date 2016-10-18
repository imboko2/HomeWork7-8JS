$('.button_number_one').click(function(){ $('.first_text').removeClass("hidden");$('.second_text').addClass("hidden");$('.third_text').addClass("hidden");});
$('.button_number_two').click(function(){ $('.second_text').removeClass("hidden");$('.first_text').addClass("hidden");$('.third_text').addClass("hidden");});
$('.button_number_three').click(function(){ $('.third_text').removeClass("hidden");$('.first_text').addClass("hidden");$('.second_text').addClass("hidden");});

$(inp1).mouseover(function(){$(h1).removeClass("hidden");});
$(inp2).mouseover(function(){$(h2).removeClass("hidden");});
$(inp3).mouseover(function(){$(h3).removeClass("hidden");});
$(inp1).mouseout(function(){$(h1).addClass("hidden");});
$(inp2).mouseout(function(){$(h2).addClass("hidden");});
$(inp3).mouseout(function(){$(h3).addClass("hidden");});

$(b1).click(function(){$(h1).removeClass("hidden");
    $(h2).removeClass("hidden");
    $(h3).removeClass("hidden");});

