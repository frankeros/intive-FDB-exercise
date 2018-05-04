# Intive - FDB Exercise

Technical exercise for React.
Made with:
```
Node.js v9.7.1 
npm 5.6.0
```

### Installing

1. Clone this repository.

2. Install dependencies with npm:

```
$ npm install
```
### Testing

## Add new user

When new user is add, it's show in the lists of entries at Home page and Revisited page.
The list at Home page show the new entries from current session. This list is cleared when session is finished.
The list at Revisited page show the all entries stored in localStorage. This list can be cleared clearing the localStorage.
The rows on both list can be selected and show his data in the message panel.

## Language

The language can be changed using this path:
```
http:\\localhost:8080\<lng>
```
The values can be "en" for ENGLISH, "es" for SPANISH and "pt" for PORTUGUESE.

## Development

```
$ npm start
```

## Production

```
$ npm build
```
Note: The folder *locales* must be copied with the content of dist for publish.

## Authors

* **Franco Charriol** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
