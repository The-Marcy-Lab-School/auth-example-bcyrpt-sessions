// <!-- DONT TOUCH ANY OF THIS, THIS IS JUST TESTING -->

// /* eslint-disable import/extensions */
// import {
//   fetchLoggedInUser,
//   //handleFetch,
//   setNav,
// } from './global.js';

// const main = async () => {
//   const user = await fetchLoggedInUser();
//   setNav(!!user);

//   const handlePhotoSubmit = async (e) => {
//     e.preventDefault();
//     const url = document.querySelector('#search-input').value;
//     // console.log(url)
//     const body = {url}
//     const options = {
//       method: 'POST',
//       headers: {
//         "Content-Type": 'application/json',
//       },
//       body: JSON.stringify(body),
//       credentials: 'include', // includes cookies in the request
//     };
//     const response = await fetch('/api/posted-images', options);
//   }

//  const accessKey = ;
//       const perPage = 30;
//       const imageContainer = document.getElementById('image-container');
//       const searchForm = document.getElementById('search-form');
  
//       function loadImages(query, page = 1) {
//         const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;
  
//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => {
//             const images = data.results.map((result) => result.urls.regular);
//             images.forEach((imageUrl) => {
//               const img = document.createElement('img');
//               img.src = imageUrl;
//               img.classList.add('image-item');
  
//               const shareBtn = document.createElement('button');
//               shareBtn.textContent = 'Share';
//               shareBtn.addEventListener('click', () => {
//                 //console.log(imageUrl);
//                 console.log("boyyyy");
//               });
  
//               const imageWrapper = document.createElement('div');
//               imageWrapper.classList.add('image-wrapper');
//               imageWrapper.appendChild(shareBtn);
//               imageWrapper.appendChild(img);
//               imageContainer.appendChild(imageWrapper);
//             });
//           })
//           .catch((error) => console.error(error));
//       }
  
//       let page = 1;
//       loadImages('beach', page);
  
//       searchForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const query = document.getElementById('search-input').value;
//         page = 1;
//         imageContainer.innerHTML = '';
//         loadImages(query, page);
//       });
  
//       window.addEventListener('scroll', () => {
//         if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
//           page++;
//           loadImages(query, page);
//         }
//       });


//   document.querySelector("#search-form").addEventListener('submit', handlePhotoSubmit);
// };




//click button

//  const accessKey = ;
//       const perPage = 30;
//       const imageContainer = document.getElementById('image-container');
//       const searchForm = document.getElementById('search-form');
  
//       function loadImages(query, page = 1) {
//         const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;
  
//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => {
//             const images = data.results.map((result) => result.urls.regular);
//             images.forEach((imageUrl) => {
//               const img = document.createElement('img');
//               img.src = imageUrl;
//               img.classList.add('image-item');
  
//               const shareBtn = document.createElement('button');
//               shareBtn.textContent = 'Share';
//               shareBtn.addEventListener('click', () => {
//                 //console.log(imageUrl);
//                 console.log("boyyyy");
//               });
  
//               const imageWrapper = document.createElement('div');
//               imageWrapper.classList.add('image-wrapper');
//               imageWrapper.appendChild(shareBtn);
//               imageWrapper.appendChild(img);
//               imageContainer.appendChild(imageWrapper);
//             });
//           })
//           .catch((error) => console.error(error));
//       }
  
//       let page = 1;
//       loadImages('beach', page);
  
//       searchForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const query = document.getElementById('search-input').value;
//         page = 1;
//         imageContainer.innerHTML = '';
//         loadImages(query, page);
//       });
  
//       window.addEventListener('scroll', () => {
//         if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
//           page++;
//           loadImages(query, page);
//         }
//       });




      

//main();














//this works
/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  setNav,
} from './global.js';


let u = "";

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);

  const handlePhotoSubmit = async (imageUrl) => {
    const body = { url: imageUrl };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    };
    const response = await fetch('/api/posted-images', options);
  }

  const accessKey = '';
  const perPage = 30;
  const imageContainer = document.getElementById('image-container');
  const searchForm = document.getElementById('search-form');

  function loadImages(query, page = 1) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const images = data.results.map((result) => result.urls.regular);
        images.forEach((imageUrl) => {
          const img = document.createElement('img');
          img.src = imageUrl;
          //img.classList.add('image-item');

          const shareBtn = document.createElement('button');
          shareBtn.textContent = 'Share';
          shareBtn.addEventListener('click', () => {
            handlePhotoSubmit(imageUrl);
          });

          const imageWrapper = document.createElement('div');
          imageWrapper.classList.add('image-wrapper');


          imageWrapper.appendChild(shareBtn);
          imageWrapper.appendChild(img);
          imageContainer.appendChild(imageWrapper);
        });
      })
      .catch((error) => console.error(error));
  }

  let page = 1;
  // loadImages('beach', page);

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    page = 1;
    imageContainer.innerHTML = '';
    loadImages(query, page);
  });

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
      page++;
      loadImages(query, page);
    }
  });
};

main();



