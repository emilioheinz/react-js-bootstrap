# :dart: react-js-bootstrap
A simple clean and easy repository that bootstraps a project initialization for ReactJS with Styled Components, Redux, Navigation and Api connection all configured.

## :arrows_clockwise:	Folders organization
- The folders organization is really simple, if you want you can modify as your own project needs.

### :floppy_disk: Assets
- All the assests of your project, like images, svgs, gifs and whatever you want. If you want, you can split the assets in another sub directories like images, gifs etc.

### Components
- The components that are used in all the application, like buttons, modals, inputs etc, you can put there. Usually I create a folder with the components name, for example, Button, and inside a `index.js` and a `styles.js`.

### :wrench: Config
- All the files that are about your porject configuration, in our case we have Reactotron lib already configured. Usually this configs filles are about libs that you are using in your project and these libs need a previous configuration, like keys, ips, addresses etc.

### :page_facing_up: Pages
- Here you can follow the same example of the components folder, we are going to create a folder with the screens name, like, Home, inside this folder you can create a `index.js` and a `styles.js`. If you have any component that is used just inside that screen, you can create a `components` inside the screens folde and folow the guide as the global components folder.

### :department_store: Store
- Here we have the configuration and all things about our Redux store, but, if you are user Context API ou something else to controle the state of your application youn can put theses things inside there.

### :cyclone: Routes
- In this folder we have all the configs and code aboute the routes, here you can redirect the user to logged or not logged pages and outher things like that.

### :construction_worker: Services
- Here we mantain the services of our application, here we have the core of the api connection, all the backend calls are made here by the services, if you have another service like text formatting ore somethign like that you can crete a folder or file inside here.

### :nail_care: Styles
- In this folder we mantain globalStyles, if you have a application with themes you can crete a file or folder fore these themes right there and manage it like you want with the styled-components.

## :bomb: Mocked API
- Thats a feature that was added to this bootstrap to make more easy the frontend development without any API working. If you are working in a team and the API endpoint that you need isn't already finished, yout can mock the API return inside `server.json` file and just run the command `json-server server server.json -p 3333` so you can call this mocked endpoint, and use the reall endpoint after. If you want to know more about json-server you can read the docs right here: https://github.com/typicode/json-server
