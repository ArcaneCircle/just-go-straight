# Just go straight

![Capture](public/b.png)

A port to webxdc of [Just go straight](https://github.com/Gimond/just-go-straight) game.

---

The goal of the game is to find the treasure. The path to get it is simple, you just have to go straight.

The interest of the game resides on the bet that the player will never go straight on the first try.
But as soon as they take another direction they are lost in the jungle and at every screen change, they get a better chance to get back to the beach so they have another chance to get it right.

## Contributing

### Installing Dependencies

After cloning this repo, install dependencies:

```
pnpm i
```

### Checking code format

```
pnpm check
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm start
```

### Building

To package the WebXDC file:

```
pnpm build
```

To package the WebXDC with developer tools inside to debug in Delta Chat, set the `NODE_ENV`
environment variable to "debug":

```
NODE_ENV=debug pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag -a v1.0.1
git push origin v1.0.1
```
