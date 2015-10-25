// Button that, when pressed, starts a podcast playing
import React, {Component, StyleSheet, Text} from 'react-native';
import MTAudio from '../lib/MTAudio';
import Button from './button';

export default class AudioButton extends Component {

    statics = {
        source: 'http://feedproxy.google.com/~r/talpodcast/~5/oAUew8Qryuo/570.mp3',
        title: '#570 The Night In Question',
        artist: 'Radiolab'
    }

    constructor() {
        super();
        this.state = {
            playing: false
        };
    }

    playAudio = () => {
        if (!this.state.playing) {
            MTAudio.play(this.statics.source, this.statics.title, this.statics.artist);
            this.setState({
                playing: true
            });
        }
    }

    render() {
        let contents;

        if (this.state.playing) {
            contents = <Text style={style.text}>(buffering + playing)</Text>;
        } else {
            contents = <Text style={style.text}>Tap me to to play a podcast</Text>;
        }
        return (
            <Button onPress={this.playAudio}>
                {contents}
            </Button>
        );
    }
}

let style = StyleSheet.create({
    wrapper: {
        backgroundColor: 'red',
        height: 40
    },
    text: {
        color: 'white'
    }
});
