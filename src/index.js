import './styles/styles.css';
import mustang from './images/Mustang-GT.png';

// Get rid of all the old content so we can put in new stuff.
const app = document.getElementById('app');
while (app.firstChild) {
    app.firstChild.remove();
}

// Add congratulations header
let newElement = document.createElement('h1');
newElement.innerText = 'Congratulations!';
app.appendChild(newElement);

// Add two paragraphs explaining what to do next.
newElement = document.createElement('p');
newElement.innerText = 'You did it!  Now you are ready to start bringing your own files into this project.';
app.appendChild(newElement);

newElement = document.createElement('p');
newElement.innerText = 'You\'ll need to stop webpack-dev-server before you go to the next step.  Go to your command terminal and press Ctrl+C.';
app.appendChild(newElement);

// Cool car!
newElement = document.createElement('img');
newElement.src = mustang;
newElement.classList.add('centered-image');
app.appendChild(newElement);
