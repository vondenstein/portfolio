/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// import * as Sentry from '@sentry/browser';

// exports.onClientEntry = () => {
//     Sentry.init({dsn: "https://70458e4d85ed430987ba0fcc479fc181@o385188.ingest.sentry.io/5217517"});
// }

const Sentry = require(`@sentry/browser`)

exports.onClientEntry = () => {
  console.log("onClientEntry")
  Sentry.init({
    dsn:
      "https://70458e4d85ed430987ba0fcc479fc181@o385188.ingest.sentry.io/5217517",
  })
}

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
  Sentry.captureMessage(`Something went wrong`)
}

// export const onServiceWorkerUpdateReady = () => {
//     const answer = window.confirm(
//       `This application has been updated. ` +
//         `Reload to display the latest version?`
//     )

//     if (answer === true) {
//       window.location.reload()
//     }
//   }
