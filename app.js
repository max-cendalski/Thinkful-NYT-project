//banner
$('.intro1').fadeOut(5000);
$('.intro2').hide().fadeIn(7000).show(4000).fadeOut(3000);


function getDataFromAPI(searchTerm, callback) {
	const  NYT_SEARCH_URL = 'http://api.nytimes.com/svc/search/v1';
	const query = {
		part: 'snippet',
		q: searchTerm
    }
}



// render results


function displayNewYorkTimesData(data) {
	console.log(data);
	const results = data.items.map((item, index) => renderResult(item));
  $('#results').html(results);
};

function watchSubmit() {
$('#searchForm').submit(event => {
	event.preventDefault();
	const searchTerm = $('#searchInput').val();
	$('#searchInput').val("");
	getDataFromAPI(searchTerm, displayNewYorkTimesData);

});
};


