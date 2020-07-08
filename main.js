fetch("https://api.github.com/users/geetaojha")
	.then(response=>response.json())
	.then(function(data) {
		console.log(data)
		
		document.getElementById('Pic').src = data['avatar_url']

		document.getElementById('Myname').textContent = data['name']

	})
	
	fetch("https://api.github.com/users/GeetaOjha/repos")
		.then(response => response.json()) 
		.then(function(data) {
		var tableBody = document.getElementById('tableBody');
		var statusHTML = '';

		data.forEach(Element => {
		    statusHTML += '<tr>';
		    statusHTML += '<td>' + Element['name'] + '</td>';
		    statusHTML += '<td>' + Element['html_url'] + '</td>';
		    statusHTML += '</tr>';
		});
		tableBody.innerHTML = statusHTML;
		})