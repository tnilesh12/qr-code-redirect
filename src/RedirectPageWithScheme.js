// import React, { useEffect } from 'react';

// const RedirectPage = () => {
//     useEffect(() => {
//         const detectOSAndRedirect = () => {
//             const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//             // Custom URL scheme for Instagram
//             const instagramScheme = "instagram://user";

//             // Function to check if Instagram app is installed
//             const isInstagramAppInstalled = () => {
//                 const iOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
//                 const android = /android/i.test(userAgent);

//                 if (iOS) {
//                     return true; // We assume the Instagram app is installed on iOS
//                 } else if (android) {
//                     // For Android, we need to use a different approach
//                     const testLink = document.createElement("a");
//                     testLink.href = instagramScheme;
//                     return testLink.protocol === "instagram:";
//                 } else {
//                     return false; // Unsupported OS
//                 }
//             };

//             // Redirect to the app store based on OS
//             const redirectToAppStore = (userAgent) => {
//                 if (/android/i.test(userAgent)) {
//                     window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android";
//                 } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//                     window.location.href = "https://apps.apple.com/app/instagram/id389801252";
//                 } else {
//                     // Redirect to a generic page or handle other OS
//                     alert("Unsupported OS");
//                     // Redirect to a default URL
//                     window.location.href = "https://example.com";
//                 }
//             };

//             if (isInstagramAppInstalled()) {
//                 window.location.href = instagramScheme; // Open Instagram app
//             } else {
//                 redirectToAppStore(userAgent); // Redirect to the app store
//             }
//         };

//         detectOSAndRedirect();

//     }, []); // Empty dependency array ensures useEffect runs only once after component mount

//     return (
//         <div>
//             Redirecting...
//             {/* You can add a loading message or spinner here */}
//         </div>
//     );
// };

// export default RedirectPage;



// // // server.js
// // const express = require('express');
// // const app = express();

// // app.get('/redirect', (req, res) => {
// //   const userAgent = req.headers['user-agent'];
// //   const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
// //   const appStoreLink = 'https://apps.apple.com/app/instagram/id389801252';
// //   const playStoreLink = 'https://play.google.com/store/apps/details?id=com.instagram.android';
  
// //   const redirectLink = isIOS ? appStoreLink : playStoreLink;
// //   console.log(redirectLink);
// //   res.redirect(redirectLink);
// // });

// // app.listen(3000, () => {
// //   console.log('Server is running on port 3000');
// // });