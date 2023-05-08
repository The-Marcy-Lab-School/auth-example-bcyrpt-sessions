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

//  const accessKey = '';
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
// import {
//   fetchLoggedInUser,
//   setNav,
// } from './global.js';


// let u = "";

// const main = async () => {
//   const user = await fetchLoggedInUser();
//   setNav(!!user);

//   const handlePhotoSubmit = async (imageUrl) => {
//     const body = { url: imageUrl };
//     console.log(body)
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//       credentials: 'include',
//     };
//     const response = await fetch('/api/posted-images', options);
//   }

//   const accessKey = '';
//   const perPage = 30;
//   const imageContainer = document.getElementById('image-container');
//   const searchForm = document.getElementById('search-form');

//   function loadImages(query, page = 1) {
//     const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const images = data.results.map((result) => result.urls.regular);
//         images.forEach((imageUrl) => {
//           const img = document.createElement('img');
//           img.src = imageUrl;
//           //img.classList.add('image-item');

//           const shareBtn = document.createElement('button');
//           shareBtn.textContent = 'Share';
//           shareBtn.addEventListener('click', () => {
//             console.log(imageUrl)
//             handlePhotoSubmit(imageUrl);
//           });

//           const deleteBtn = document.createElement('button');
//           deleteBtn.textContent = 'delte';
//           deleteBtn.addEventListener('click', () => {
//             handlePhotoSubmit(imageUrl);
//           });

//           const imageWrapper = document.createElement('div');
//           imageWrapper.classList.add('image-wrapper');


//           imageWrapper.appendChild(shareBtn);
//           imageWrapper.appendChild(deleteBtn);

//           imageWrapper.appendChild(img);
//           imageContainer.appendChild(imageWrapper);

//         });
//       })
//       .catch((error) => console.error(error));
//   }

//   let page = 1;
//   // loadImages('beach', page);

//   searchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const query = document.getElementById('search-input').value;
//     page = 1;
//     imageContainer.innerHTML = '';
//     loadImages(query, page);
//   });

//   window.addEventListener('scroll', () => {
//     if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
//       page++;
//       loadImages(query, page);
//     }
//   });
// };

// main();




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
    console.log(body)
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
    let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const images = data.results.map((result) => result.urls.regular);
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';
        row.style.flexWrap = 'wrap';
        row.style.justifyContent = 'space-between';

        images.forEach((imageUrl) => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.style.width = '100%';

          const saveBtn = document.createElement('button');
          saveBtn.classList.add('save');
          saveBtn.textContent = 'Save';

          //TWITTER BUTTON
          // const twitterBtn = document.createElement('button');//Create button to redirect user to their twitter to post image or redirect them to the image
          // twitterBtn.classList.add('spheric-button');
          // twitterBtn.textContent = imageUrl
          // 'twitter.com';

          //DOWNLOAD THE IMAGE 
          // const downloadBtn = document.createElement('button');
          // downloadBtn.classList.add('round-button');
          // const downloadIcon = document.createElement('img');
          // downloadIcon.src = 'https://cdn-icons-png.flaticon.com/512/3580/3580382.png';
          // downloadBtn.appendChild(downloadIcon);

          const shareBtn = document.createElement('button');
          shareBtn.classList.add('round-button');
          const shareIcon = document.createElement('img');
          shareIcon.src = 'https://cdn-icons-png.flaticon.com/512/512/512142.png';
          shareBtn.appendChild(shareIcon);

          shareBtn.addEventListener('click', () => {
                        //console.log(imageUrl)
                        handlePhotoSubmit(imageUrl);
                       // shareBtn.appendChild(shareIcon);
                      });

          // const shareIcon = document.createElement('img');
          // const shareBtn = document.createElement('button');
          // // shareBtn.appendChild(shareIcon);
          //           shareBtn.textContent = 'Share';
          //           shareBtn.addEventListener('click', () => {
          //             console.log(imageUrl)
          //             handlePhotoSubmit(imageUrl);
          //             shareBtn.appendChild(shareIcon);
          //           });








          const buttonGroup = document.createElement('div');//places button in its own div
           //buttonGroup.appendChild(twitterBtn)//not yet using 
          // buttonGroup.appendChild(downloadBtn);
          buttonGroup.appendChild(shareBtn);

          const overlayContent = document.createElement('div');//button over appears over the images
          overlayContent.appendChild(saveBtn);
          overlayContent.appendChild(buttonGroup);

          const overlay = document.createElement('div');
          overlay.classList.add('overlay');
          overlay.appendChild(overlayContent);

          const imageWrapper = document.createElement('div');
          imageWrapper.classList.add('image-wrapper');
          imageWrapper.appendChild(overlay);
          imageWrapper.appendChild(img);

          const contentWrapper = document.createElement('div');
          contentWrapper.classList.add('content-wrapper');
          contentWrapper.appendChild(imageWrapper);

          const column = document.createElement('div');
          column.classList.add('column');
          column.style.width = '30%';
          column.style.marginBottom = '20px';
          column.appendChild(contentWrapper);

          row.appendChild(column);
        });

        imageContainer.appendChild(row);
      })
      .catch((error) => console.error(error));
  }

  let page =  1;
  //   // loadImages('beach', page);
  
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = document.getElementById('search-input').value;//searches for images 
      page = 1;//each time we scrolll and it goes to the bottom of the page it adds 1 to the query and make it load
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
  
  
  
