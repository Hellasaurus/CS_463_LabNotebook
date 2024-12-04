const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url).then((response) => response.json())
    .then((result) => result.forEach(element => {
      console.log(element);
      const{name, authors, released, numberOfPages} = element;
      let newElem = document.createElement('aside');
      let namediv = document.createElement('h3');
      namediv.textContent = name;
      let authordiv = document.createElement('p');
      authordiv.textContent = 'by ' + authors[0];
      let releaseddiv = document.createElement('p');
      releaseddiv.textContent = released.substring(0,4);
      let numdiv = document.createElement('p');
      numdiv.textContent = numberOfPages + " Pages";

      newElem.append(namediv);
      newElem.append(authordiv);
      newElem.append(releaseddiv);
      newElem.append(numdiv);

      app.append(newElem);
    })).finally(document.querySelector('#loading').style = 'display:none')
};

fetchData(url);
