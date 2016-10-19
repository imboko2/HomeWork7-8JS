$('.button_number_one').click(function(){ $('.first_text').removeClass("hidden");$('.second_text').addClass("hidden");$('.third_text').addClass("hidden");});
$('.button_number_two').click(function(){ $('.second_text').removeClass("hidden");$('.first_text').addClass("hidden");$('.third_text').addClass("hidden");});
$('.button_number_three').click(function(){ $('.third_text').removeClass("hidden");$('.first_text').addClass("hidden");$('.second_text').addClass("hidden");});

$(inp1).click(function(){$(h1).toggle(h1);});
$(inp2).click(function(){$(h2).toggle(h2);});
$(inp3).click(function(){$(h3).toggle(h3);});
// $(inp1).mouseout(function(){$(h1).toggle(h1);});
// $(inp2).mouseout(function(){$(h2).toggle(h2);});
// $(inp3).mouseout(function(){$(h3).toggle(h3);});

$(b1).click(function()  {$(h1).toggle(h1);
                        $(h2).toggle(h2);
                        $(h3).toggle(h3);});

