import format from 'date-fns/format';

var span = document.querySelector('#time-now');

export default function update() {
	span.textContent = 'Hello World';
}