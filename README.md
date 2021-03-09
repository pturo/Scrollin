# Scrollin'

Multiplatform app made with Quasar framework based on this tutorial: https://www.youtube.com/watch?v=la-0ulfn0_M
This application allows you to post Twitter-like posts. You can also like your posts and delete. Every post is saved
in database using Firebase. This app can be running on several platforms:
- Web (in your web browser),
- Desktop (on Windows and Mac),
- Mobile (on Android and iOS).
Here is some screenshots for devices above.
Web
![web](example-images/web00.png)

Desktop
![desktop](example-images/desktop00.png)

Mobile
![mobile](example-images/mobile00.png)

To run this app correctly follow instructions below.

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

And of course check your configurations for desktop and mobile version if you would like to run it there.
For mobile version follow instructions: https://quasar.dev/quasar-cli/developing-cordova-apps/build-commands
