
<p align="center">
    <h3 align="center">Simple React API list with tests<br></h3>
</p>


<p align="center">
  This is a very simple React example of how to list some REST API data.
  Usually testing process is not included to repos, and for this reason is a bit difficult to find react examples showing tests. So I thought it could be useful for someone to upload them here. Any pull request or comment to improve them or the example will be highly wellcome.  
  Used Axios for the API requests service.  
  Used Enzyme, Prototype and some custom helper for testing.
  The service is pointing a typicode's free mockup service (I intended to make a heroes list, ended up doint a writers one XD) so if it has many calls, typicode may cut it. You can just mock your own data endpoint or use any other REST API.
</p>


### Prerequisites
* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) or yarn (https://yarnpkg.com/) installed in your system.

### To run
* Fork and clone the project:

```
git clone https://github.com/maria-antignolo/tiny-react-api-list-with-tests.git
```

* Then install the dependencies:

```
yarn install
```
or

```
npm install
```

* Run development server:

```
yarn start
```
or

```
npm start
```

Open the web browser to `http://localhost:3000/`

### To test
To run unit tests:

```
yarn test
```
or

```
npm test
```

### To build the production package
This is pending

### Eslint
I shall add some `.eslintrc.js` config for eslint ready with React plugin.
Pending by now.

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
