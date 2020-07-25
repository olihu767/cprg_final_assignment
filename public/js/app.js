fetch("http://localhost:3000/api/destinations")
  .then(function(response){
    return response.json();
  })
  .then(function(destinations){

    const imgList = destinations;
  
// Variable where we will store our img tags

    let galleryTemplate = '';

// Flex container for images
    const gallery = document.querySelector('.gallery');

// Loop through items using forEach
    imgList.forEach(function(item) {
      console.log(item);
      galleryTemplate += 
        `<figure>
        <img src='https://picsum.photos/id/${item.id}/400/400' alt='Picture of ${item.location}'>
        <a href='${item.site}' title='${item.location}' target='_blank'><h2>${item.location}</h2></a>
        <p>${item.description}</p>
        </figure>`;
});

// Add HTML img string to gallery container
gallery.innerHTML = galleryTemplate;
destinationCards = Array.from(document.querySelector('.gallery'))
destinationCards.forEach(function(item) {
  console.log(item);
  item.setAttribute('class', 'center flex-vertical destination-card');
});

});
      