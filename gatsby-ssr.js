/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
export { default as wrapRootElement } from './src/redux/setup/ReduxWrapper';
