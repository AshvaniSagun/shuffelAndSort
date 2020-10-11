window.onload = load;
var shuffleAndSortObj = (function shuffleAndSort() {
const arra1 = [{number:1,  class: 'colorGrp1' }, 
              { number:2,  class: 'colorGrp2' }, 
              { number:3,  class: 'colorGrp3' }, 
              { number:4,  class: 'colorGrp2' }, 
              { number:5,  class: 'colorGrp3' }, 
              { number:6,  class: 'colorGrp4' }, 
              { number:7,  class: 'colorGrp4' },
              { number:8,  class: 'colorGrp1' }, 
              { number:9,  class: 'colorGrp3' }];
function shuffle() {
    let ctr = arra1.length;
    while (ctr > 0) {
        let index = Math.floor(Math.random() * ctr);
        ctr--;
        let temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    render(arra1);
}

function render(arra1) {
    document.getElementById('shuffle').innerHTML = '';
	for(var i = 0; i < arra1.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		card.className = "col-md-4 col-sm-4 col-xs-12 box card "+ arra1[i].class;
		value.className = "value";

		value.innerHTML = arra1[i].number;
		card.appendChild(value);

		document.getElementById("shuffle").appendChild(card);
	}
}

function sort() {
    arra1.sort((x, y) => {
        return x.number - y.number;
    });
    render(arra1);
}
return {
    shuffle, sort
}
})();

function load() {
	shuffleAndSortObj.sort();
}

