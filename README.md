# SCB Demo App

## 0. Content

1. [Introduction](#1.-Introduction)
2. [Environment](#2.-Environment)
3. [Installation](#3.-Installation)
4. [Code Features](#4.-Code-Features)
5. [Functions](#5.-Functions)
6. [Optimizations (TODO)](#6.-Other-Optimizations-(TODO))

## 1. Introduction

This is a simple social mobile app, showing how to use react-native to build a cross-platform mobile application.

This app uses the public API [jsonplaceholder](https://jsonplaceholder.typicode.com/), which is an api providing json format data for supporting a simple social network application.

The mobile app contains 5 modules:

* List posts
* List users
* List albums of login user
* List Todos
* Show profile of login user

## 2. Environment:
Below list is the software/package versions when I develop this app.


Software | Version
-------- | -------
macOS Mojave | 10.14.5
Xcode | 10.2.1
npm |  6.9.0
iOS | 12.2
Android Studio | 3.4.1
Android OS | 9 (not supported yet)

Information from package.json:
```
"axios": "^0.19.0",
"prop-types": "^15.7.2",
"react": "16.8.3",
"react-native": "0.59.9",
"react-native-navigation": "^3.0.0-alpha.0",
"react-native-vector-icons": "^6.5.0",
"react-redux": "^6.0.1",
"redux": "^4.0.1",
"redux-axios-middleware": "^4.0.0"
```

## 3. Installation

*NOTE: I develop this mobile on Macbook Pro, the below commands are all based on macOS*

### Step 1:

React-Native is based on **Node Package Manager (npm)**, if you haven't install npm yet, please install [Node.js](https://nodejs.org/en/) from the official website.

### Step 2:

Clone the repository to local machine by using git:

```bash
git clone git@github.com:LeoTianJob/SCBDemoApp.git
```

### Step 3:

Go to SCBDemoApp folder:
```bash
cd /path/to/SCBDemoApp
```

### Step 4:

In the root path of the SCBDemoApp folder, run:

```bash
npm install
```

### Step 5:

*NOTE: based on the time limitation, I haven't make app run on the android emulator yet. I will finish this part when I am free.*

After installing all the packages, run the app on iOS simulator by command

```bash
react-native run-ios
```

## 4. Code Features

The below features are mainly shown in the code:

1. How to structure a react-native project. (folder & files hirearchy)
2. How to write UI stateless component.
3. How to write stateful component to handle app logic.
4. How to write HOC container.
5. How to use [`react-native-navigation`](https://wix.github.io/react-native-navigation/#/). (This is my first time to use `react-native-navigation`, I used to use [`react-navigation`](https://reactnavigation.org) to implement the navigation.)
6. How to use local `state` variable. (Post & Users)
7. How to use `redux` in react-native app. (Todos & Profile)
8. How to mix-use local `state` and `redux`. (Albums)
9. How to use [`axios`](https://github.com/axios/axios) to do http request.
10. How to write Basic UI styles.

## 5. App Functions

### Home Page

List 5 Tabs for the app. (Tab Navigator)

* Posts
* Friends
* Albums 
* Todos
* Profile

### Posts

1. Load the first 10 posts into the app.
2. Drag post list down to fetch the latest posts. (Since there is no update from the API side, I just fake this part in the app.)
3. Scroll down to load more posts.
4. Clicking one post can navigate the app to post details page. (Stack Navigator)
5. Post content and comments can be listed in post details page.

-------> Post a gif animation here.

### Friends

1. List all users.
2. Clicking one user widget can navigate app to profile page and show selected user's information. (Stack Navigator)

-------> Post a gif animation here.

### Albums

1. List all albums for login user. (Assume the `id` of login user is `1`)
2. Click one album widget can navigate app to album detail page and show all the album photos. (Stack Navigator)
3. Clicking on photo in the album can show the photo details. (Modal Navigator)

-------> Post a gif animation here.

### Todos

1. List all todo items for login user.
2. Sort the todo items by completed or not.
3. Show a removed line for these completed todos.

-------> Post a gif animation here.

### Profile

1. Show the login user details in profile page.
2. Create a good-look profile avatar component.
3. Use basic animation to show user's information by clicking button.

-------> Post a gif animation here.

## 6. Other Optimizations (TODO)

Because of the time limitation, the app can still be improved in the futures.

**TODO:**

- [ ] **[Improvement]** Make app run on the android emulator/phones.
- [ ] **[Improvement]** Create DEV/UAT/PRD environment for development.
- [ ] **[Improvement]** Use HOC (like withErrorHandler) to handler the errors of http response.
- [ ] **[Improvement]** Check all `componentWillUnmount()` functions when one component get destroyed.
- [ ] **[Improvement]**  Fix warning:

    ```
    Unable to define method 'getConstants()' on NativeModule 'RNNBridgeModule'. NativeModule 'RNNBridgeModule' already has a constant or method called 'getConstants'. Please remove it.
    ```
- [ ] **[Improvement]** Fix warning:

    ```
    Require cycle: src/navigation/screens.js -> src/containers/Posts/index.js -> src/navigation/screens.js
    ```
- [ ] **[Improvement]** Add a customized `<LinearGradientView />` by using Native Modules. The details can be checked [here](https://medium.com/react-native-training/react-native-bridging-how-to-make-linear-gradient-view-83c3805373b7).
- [ ] **[Bug]** TextInput of writting comments can be hidden by keyboard when typing.
- [ ] **[Bug]** When clicking one user in friends, the photo of selected user is incorrect. For fast development, I just used photo whose id equals to user's id as selected user's profile images.
- [ ] Any `bugs`|`improvements`|`suggestions` from you are welcome.
