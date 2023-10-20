const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	for(let item of fruit){
		if (item.toLowerCase().includes(str.toLowerCase()) && results.length < 6 && str.toLowerCase() !== " ".repeat(str.length) && str.length !== 0){
			results.push(item);
		}
	}
	return results;
}

function searchHandler(e) {
	showSuggestions(search(e.target.value), e.target.value)
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";
	for(let item of results){
		let newSuggestion = document.createElement("li");
		let newSugText = "";
		for(let x in item){
			if(+x === item.toLowerCase().indexOf(inputVal.toLowerCase()) && +x <= item.toLowerCase().indexOf(inputVal.toLowerCase())+inputVal.length-1){
				newSugText += "<b>";
				newSugText += item[x];
				if(inputVal.length < 2){
					newSugText += "</b>"
				}
			} else if(+x === item.toLowerCase().indexOf(inputVal.toLowerCase())+inputVal.length-1){
				newSugText += item[x];
				newSugText += "</b>"
			} 
			else{
				newSugText += item[x]
			}
		}
		newSuggestion.innerHTML = newSugText;
		suggestions.append(newSuggestion);
	}
}

function useSuggestion(e) {
	if(e.target.tagName === "B"){
		input.value = e.target.parentElement.innerText
		
	} else{
	input.value = e.target.innerText
	}
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);