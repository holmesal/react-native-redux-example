// JS side of the MTAudio component
/* eslint-disable no-console */

import {NativeAppEventEmitter} from 'react-native';
import {MTAudio} from 'NativeModules';

class MTAudioBridge {

    constructor() {
        // Listen for state change events over the bridge
        NativeAppEventEmitter.addListener('MTAudio.updateState', this.updateState);
    }

    play(source, title, artist) {
        MTAudio.play(source, title, artist);
    }

    updateState(ev) {
        // Normally we'd push this into the store, so that components like
        // scrubbers and play/pause buttons could update, but for this
        // demo we'll just log it out
        console.info('got updated MTAudio state', ev);
    }
}

export default new MTAudioBridge();
