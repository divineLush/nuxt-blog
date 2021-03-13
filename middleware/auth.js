// middleware is a function that's is executed before the page is loaded
// initially runs on a server, then runs on client
// should be added to page components or layout components
// could be added to all routes in nuxt.config (router: { middleware: 'log' })

export default function (context) {
    if (!context.store.getters.isAuth)
        context.redirect('/auth');
    // if you run async code here, return a promise
    // if you run sync code, you don't have to return anything
};
