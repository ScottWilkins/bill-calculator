$(document).ready(function(){
  var p1Btn    = $('#p1'),
      p2Btn    = $('#p2'),
      ta1      = $('#left_amounts'),
      ta2      = $('#right_amounts'),
      total    = $('#total'),
      owes     = $('#owes'),
      p1Name   = $('#p1Name'),
      p2Name   = $('#p2Name'),
      p1tot    = $('#p1Tot'),
      p2tot    = $('#p2Tot'),
      p1tots   = $('#p1Tots'),
      p2tots   = $('#p2Tots'),
      p1total  = 0,
      p2total  = 0,
      p1numsArr = [],
      p2numsArr = [];
      owes      = $('#owes'),
      total.html('$0.00');


  p1Btn.on('click', function(){
      p1Name.html($("#p1-input").val())
      p1tot.html($("#p1-input").val())
  })
  p2Btn.on('click', function(){
      p2Name.html($("#p2-input").val())
      p2tot.text($("#p2-input").val())
  })
  ta1.keyup(function(){
      var typed   = $(this).val();
      var numsArr = scrub(typed);
      p1total     = sum(numsArr);
      p1tots.html(monetize(p1total));
      total.html(monetize(+p1total + +p2total))
      owes.html(sumDivide(p1total,p2total,p1Name.html(),p2Name.html()))

  })
  ta2.keyup(function(){
      var typed   = $(this).val();
      var numsArr = scrub(typed);
      p2total     = sum(numsArr);
      p2tots.html(monetize(p2total));
      total.html(monetize(+p1total + +p2total))
      owes.html(sumDivide(p1total,p2total,p1Name.html(),p2Name.html()))
  })
})
