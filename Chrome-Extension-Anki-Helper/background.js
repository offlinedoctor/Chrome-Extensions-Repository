document.addEventListener('DOMContentLoaded', function() 
{
	document.getElementById("getRequest").addEventListener("click", getRequest);
});

function getRequest()
{
	const myInputWord = document.getElementById("inputWord");
	const JPtoENGFrontCard = document.getElementById("JPtoENG-FrontCard");
	const JPtoENGBackCard = document.getElementById("JPtoENG-BackCard");
	const ENGtoJPFrontCard = document.getElementById("ENGtoJP-FrontCard");
	const ENGtoJPBackCard = document.getElementById("ENGtoJP-BackCard");

	fetch('https://jisho.org/api/v1/search/words?keyword=' + myInputWord.value)
	.then(result => result.json())
	.then(object =>
	{
		const myKanjiWord = object.data[0].japanese[0].word;
		const myFuriganaWord = object.data[0].japanese[0].reading;
		const myEnglishWord = object.data[0].senses[0].english_definitions;

		JPtoENGFrontCard.innerHTML = myKanjiWord;		
		JPtoENGBackCard.innerHTML = myEnglishWord + " " + "[" + myFuriganaWord + "]";

		ENGtoJPFrontCard.innerHTML = object.data[0].senses[0].english_definitions;
		ENGtoJPBackCard.innerHTML = myKanjiWord + " " + "[" + myFuriganaWord + "]";

	});
};

