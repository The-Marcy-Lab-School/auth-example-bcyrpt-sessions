// // Fetch Helpers
// const handleFetch = async (url, options) => {
//   try {
//     const response = await fetch(url, options);
//     const { status, statusText, ok } = response;
//     if (!ok) return [null, { status, statusText }];

//     const content = (status === 204) || await response.json();
//     return [content, null];
//   } catch (error) {
//     return [null, error];
//   }
// };
// console.log(handleFetch())

// const getFetchOptions = (body, method = 'POST') => ({
//   method,
//   credentials: 'include', // IMPORTANT, this tells fetch to include cookies
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(body),
// });

// // CREATE USER
// const signupAndLoginHandler = async (url, form) => {
//   const formData = new FormData(form);
//   //console.log(formData)
//   const options = getFetchOptions(Object.fromEntries(formData.entries()));
//   console.log(options)
//   const [_response, err] = await handleFetch(url, options);
//   if (err) {
//     form.reset();
//     return alert('Something went wrong');
//   }
//   window.location.assign('/user.html');
// };

// // READ USER
// const fetchLoggedInUser = async () => {
//   const [response, _err] = await handleFetch('/api/me', { credentials: 'include' });
//   return response;
// };

// // UPDATE USER
// const updateUsernameHandler = async (form) => {
//   const formData = new FormData(form);
//   const username = formData.get('username');
//   if (!username) return alert('Username is required');

//   const url = `/api/users/${form.dataset.userId}`;
//   const options = getFetchOptions({ username }, 'PATCH');

//   const [response, err] = await handleFetch(url, options);
//   return [response, err];
// };

// // DELETE USER
// const logOutHandler = async () => {
//   const [_response, err] = await handleFetch('/api/users/logout', { method: 'DELETE' });
//   if (err) return alert('Something went wrong');
//   window.location.assign('/');
// };

// // Nav Helper
// const setNav = (hasLoggedInUser) => {
//   const loggedOutNavHtml = `<ul>
//     <li><a href="/">Home</a></li>
//     <li><a href="./create.html">Sign Up</a></li>
//     <li><a href="./login.html">Login</a></li>
//   </ul>`;

//   const loggedInNavHtml = `<ul>
//     <li><a href="/">Home</a></li>
//     <li><a href="./user.html">Profile</a></li>
//   </ul>
//   <li><a href="./posted-images.html">Post</a></li>
//   </ul>`;//testing to see if page displays more than one nav linked when signed in

//   const navHtml = hasLoggedInUser ? loggedInNavHtml : loggedOutNavHtml;
//   document.querySelector('nav').innerHTML = navHtml;
// };

// // This is wonky. Once you learn about bundlers we won't have to
// // explicitly create globals. We just lack the tools right now.
// Object.assign(window, {
//   handleFetch,
//   getFetchOptions,
//   fetchLoggedInUser,
//   signupAndLoginHandler,
//   setNav,
//   logOutHandler,
//   updateUsernameHandler,
// });

// export {
//   handleFetch,
//   getFetchOptions,
//   fetchLoggedInUser,
//   signupAndLoginHandler,
//   setNav,
//   logOutHandler,
//   updateUsernameHandler,
// };

// Skip to content
// Search or jump to…
// Pulls
// Issues
// Codespaces
// Marketplace
// Explore
 
// @dhwilliams0 
// The-Marcy-Lab-School
// /
// Fall-2022-Curriculum-BMC
// Public
// Fork your own copy of The-Marcy-Lab-School/Fall-2022-Curriculum-BMC
// Code
// Issues
// Pull requests
// Actions
// Projects
// Security
// Insights
// Beta Try the new code view
// Fall-2022-Curriculum-BMC/se-unit-7/auth-demo-template/public/scripts/global.js /
// @benspector-mls
// benspector-mls adding code
// Latest commit 06be6d1 1 hour ago
//  History
//  1 contributor
// 89 lines (77 sloc)  2.41 KB
 

// Fetch Helpers
const handleFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const { status, statusText, ok } = response;
    if (!ok) return [null, { status, statusText }];

    const content = (status === 204) || await response.json();
    return [content, null];
  } catch (error) {
    return [null, error];
  }
};

const getFetchOptions = (body, method = 'POST') => ({
  method,
  credentials: 'include', // IMPORTANT, this tells fetch to include cookies
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

// CREATE USER
const signupAndLoginHandler = async (url, form) => {
  const formData = new FormData(form);
  const options = getFetchOptions(Object.fromEntries(formData.entries()));
  const [_response, err] = await handleFetch(url, options);
  if (err) {
    form.reset();
    return alert('Something went wrong');
  }
  window.location.assign('/user.html');
};

// READ USER
const fetchLoggedInUser = async () => {
  const [response, _err] = await handleFetch('/api/me', { credentials: 'include' });
  return response;
};

// UPDATE USER
const updateUsernameHandler = async (form) => {
  const formData = new FormData(form);
  const username = formData.get('username');
  if (!username) return alert('Username is required');

  const url = `/api/users/${form.dataset.userId}`;
  const options = getFetchOptions({ username }, 'PATCH');

  const [response, err] = await handleFetch(url, options);
  return [response, err];
};

// DELETE USER
const logOutHandler = async () => {
  const [_response, err] = await handleFetch('/api/users/logout', { method: 'DELETE' });
  if (err) return alert('Something went wrong');
  window.location.assign('/');
};

// Nav Helper
const setNav = (hasLoggedInUser) => {
  const loggedOutNavHtml = `
  <ul>
    <li><a class ="signUpLink" href="/">Home</a></li>
    <li><a href="./create.html">Sign Up</a></li>
    <li><a href="./login.html">Login</a></li>
  </ul>`;

  // <li><a href="./posted-images.html">Post</a></li>
  // <li><a href="./notSignIn.html">Sear</a></li>
  //   <li><a href="./h.html"></a></li>
  // <li><a href="./create.html">Sign Up</a></li>
  //   <li><a href="./login.html">Login</a></li>

  const loggedInNavHtml = `
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="./posted-images.html">Post</a></li>
    <li><a href="./h.html">h</a></li>
    <li><a href="./user.html">Profile</a></li>
  </ul>`;

  const navHtml = hasLoggedInUser ? loggedInNavHtml : loggedOutNavHtml;
  document.querySelector('nav').innerHTML = navHtml;
};

export {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  signupAndLoginHandler,
  setNav,
  logOutHandler,
  updateUsernameHandler,
};
// Footer
// © 2023 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// Fall-2022-Curriculum-BMC/global.js at main · The-Marcy-Lab-School/Fall-2022-Curriculum-BMC