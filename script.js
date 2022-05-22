el = {
  svg: "#type-writer",
  inkR: "#ink-tape-right",
  inkL: "#ink-tape-left",
  keys: "[id^='key_']",
  paper: "#paper",
  printBar: "#print-bar",
  spaceBar: "#key_0",
  heart: "#heart",
}

//printBar
TweenMax.to(el.printBar, 1, {
	x:70,
});
//ink wheel
TweenMax.to(el.inkR +","+ el.inkL, 1.1, {
	transformOrigin:"center",
	rotation:360,
  repeat:1,
  onRepeat:paperFull,
});
//keys
TweenMax.to(el.spaceBar, 1, {
	scale:.96,
  transformOrigin:"center",
});
//paper
TweenMax.to(el.paper, 1, {
	y:-50,
});

function paperFull(){
 TweenMax.to(el.paper, 1, {
  	y:-100,
	});
  TweenMax.to(el.printBar, .5, {
		x:70,
    scale:-3
	});
  TweenMax.to(el.heart, .5, {
		opacity:1
	});
  TweenMax.to(el.printBar, .5, {
    scale:1
	});
  TweenMax.to(el.printBar, 1, {
		x:160,
	});
}