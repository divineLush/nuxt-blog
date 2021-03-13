export default function(context) {
    // check if token exists or is valid
    // context.req will be null on the client
    context.store.dispatch('initAuth', context.req);
}
