const content = document.getElementById('aside-content')
if (content) {
  // Getting product title
  const titleEl = content.getElementsByTagName('h1')[0];
  const title = titleEl ? titleEl.textContent : '';
  console.log('TITLE: ', title);

  // Getting product price (with discount if it exists)
  const priceEl = content.getElementsByClassName('current-price')[0];
  const price = priceEl ? priceEl.textContent : '';
  console.log('PRICE: ', price);

  // Getting original product price (need to adjust index, currently - 1)
  const prevPriceEl = content.getElementsByClassName('product-prev-price')[1];
  const prevPrice = prevPriceEl ? prevPriceEl.textContent : '';
  console.log('PREV PRICE: ', prevPrice);
}

const gallery = document.getElementsByClassName('gallery-images')[0];
if (gallery) {
  // Getting images collection
  const images = gallery.querySelectorAll('.amp-images img');
  console.log('IMAGES COLLECTION: ', images);

  // Getting first image path
  const imageSrc = images[0] && images[0].getAttribute('src');
  console.log('FIRST IMAGE SRC: ', imageSrc);
}
