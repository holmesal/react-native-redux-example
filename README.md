This is an example react-native project w/ a flux implementation and example bridged module.

<img src="https://cloud.githubusercontent.com/assets/1147390/10714546/d9679476-7b2e-11e5-90be-7380f976453a.png" width="200" />

# Getting started

`npm install`

`pod install`

`npm start`

# Flux Implementation
This example uses [redux](https://github.com/rackt/redux), a [single-store](/src/store.js) flux implementation that eliminates the complexity of coordinating multiple stores while maintaining the core principles of flux: `(state, action) -> (state)`.

[reselect](https://github.com/rackt/reselect) is [wrapped around components](/src/components/currencyList.js#L10) to target portions of the state tree. If you're unfamiliar, it allows you to specify a component data dependency on a very specific portion of your app's global state tree. Selectors are [memoized](/src/selectors/cryptocurrencies.js#L7), meaning that your components only re-render when necessary - and because these memoized selectors ultimately pass data to your component as `props`, they generally eliminate the need for logic you'd normally place in `componentShouldUpdate()`.

# Example bridged Swift/Obj-C <-> JS component: `MTAudio`

This is a simple audio-streaming component that wraps [StreamingKit](https://github.com/tumtumtum/StreamingKit). Call it with a URL, and it'll stream the file and emit data about state changes (when buffering, stopping, etc). A decent portion of StreamingKit is implemented, but `.play(url)` is the only functionality used in this example.

* [Swift implementation (from an old project)](/ios/MTAudio.swift)
* [Objective-C bridging implementation](/ios/MTAudioBridge.m)
* [JS module](/src/lib/MTAudio.js)
