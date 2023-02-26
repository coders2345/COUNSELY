const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const username = event.target.username.value;
	const password = event.target.password.value;
	// Add your login logic here
});
