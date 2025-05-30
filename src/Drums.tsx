import type { AudioClip } from "./types";

interface DrumProps {
    audioClip: AudioClip;
}

const Drum = ({audioClip}: DrumProps) => {

    const playSound = (clip: AudioClip) => {
        const audioElement = document.getElementById(clip.keyTrigger) as HTMLAudioElement;
        if (audioElement) {
            audioElement.currentTime = 0; // Reset the audio to the start
            audioElement.play();
        }
        // Optionally, you can also update a display or log the description
        console.log(clip.description);

        document.getElementById('display')!.innerText = clip.description;
    }

    return (
        <button
            className="drum-pad"
            id={`drum-${audioClip.keyTrigger}`}
            onClick={() => playSound(audioClip)}
        >
            <audio src={audioClip.url} className="clip" id={audioClip.keyTrigger}></audio>
            {audioClip.keyTrigger}
        </button>
    )
}

export default Drum;