// This is how you import all style-sheets for your website.  You should import
// all style-sheets here in index.js.
import './styles/styles.css';

// You can also import images.  This is good to do for icons and small graphics.
// Don't use this technique for larger graphics.
import webpackLogo from './images/webpack-small.png';

// Import a script that you will use
import { getName, setName } from './scripts/name';



document.getElementById('saveBtn').onclick = () => {
    let name = document.forms['editForm'].nameEdit.value;
    setName(name);

    if (name.length === 0) {
        alert("Please type your name.");
        return;
    }
    alert(`Hello, ${getName()}!`);
}

document.getElementById("webpack-logo").src = webpackLogo;
