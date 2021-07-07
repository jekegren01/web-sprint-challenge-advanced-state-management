# Self Guided Study Questions

1. What problem does the context API help solve?
    Context API eleminates the need for prop drilling.  It allows the developer the ability to access state from anywhere, at any level of the app, only when that state is needed.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions: These preform dispactchs of specific code and provide payloads to be used by reducers. There are two properties of the object returned by a dispatch action, type and payload. Payload is optional. Type is the action dispatched to the reducer while payload is the data.

    Store: This is what holds all of the state throughout the application.  It is the 'single source of truth' because it holds all the state of the app in one place.  Thus, changes to state are made in a predictable manner.

    Reducer: This is a function that is used to make updates to the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application State is used accross multiple components application wide. This is best used with state that is needed accross components, for example user info or login info. Component State is only needed for a single component. This would be any simple form, or input only needed on a single component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    This allows for more complex action creators. It changes the action creators by allowing dispatches inside of dispatches.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    I dont know if I have a favorite state management system. There are benefits to both. However, I do see how Redux would allow for a better state management paradigm accross more complex applications.
