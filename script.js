const btn = document.getElementById('button')
const audioElement = document.getElementById('audio')

const key = ''
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist'

function playJoke(joke) {
    const jokeString = joke
        // VoiceRSS Speech Parameters
    VoiceRSS.speech({
        key: key,
        src: jokeString,
        hl: 'en-us',
        v: 'Bria',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });

}

async function getJoke() {
    const res = await fetch(url)
    const data = await res.json();
    let joke = ""
    if (data.type == 'twopart') {
        joke = data.setup + ' ' + data.delivery
    } else {
        joke = data.joke
    }
    playJoke(joke)
}

function toggleButton() {}
btn.addEventListener('click', getJoke)
    // audioElement.addEventListener('ended', toggleButton);