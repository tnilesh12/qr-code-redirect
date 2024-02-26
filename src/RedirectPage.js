import React, { useEffect } from 'react';

const RedirectPage = () => {
    useEffect(() => {
        const detectOS = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            if (/android/i.test(userAgent)) {
                window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android";
            } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                window.location.href = "https://apps.apple.com/app/instagram/id389801252";
            } else {
                // Redirect to a generic page or handle other OS
                alert("Unsupported OS");
                // Redirect to a default URL
                window.location.href = "https://example.com";
            }
        };

        detectOS();

    }, []); // Empty dependency array ensures useEffect runs only once after component mount

    return (
        <div>
            Redirecting...
            {/* You can add a loading message or spinner here */}
        </div>
    );
};

export default RedirectPage;



// // server.js
// const express = require('express');
// const app = express();

// app.get('/redirect', (req, res) => {
//   const userAgent = req.headers['user-agent'];
//   const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
//   const appStoreLink = 'https://apps.apple.com/app/instagram/id389801252';
//   const playStoreLink = 'https://play.google.com/store/apps/details?id=com.instagram.android';
  
//   const redirectLink = isIOS ? appStoreLink : playStoreLink;
//   console.log(redirectLink);
//   res.redirect(redirectLink);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });