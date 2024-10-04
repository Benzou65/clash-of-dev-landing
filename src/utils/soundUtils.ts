import ClickSound from "./sound/spacebar-click-keyboard.mp3";
import Sword_1 from "./sound/sword-1.mp3";
import Sword_2 from "./sound/sword-2.mp3";
import Sword_3 from "./sound/sword-3.mp3";
import Sword_4 from "./sound/sword-4.mp3";
import Grunt_1 from "./sound/grunt-1.mp3";
import Grunt_2 from "./sound/grunt-2.mp3";
import Grunt_3 from "./sound/grunt-3.mp3";
import Grunt_4 from "./sound/grunt-4.mp3";

let audioContext: AudioContext | null = null;
const soundBuffers: Record<string, AudioBuffer> = {};

async function loadSound(url: string): Promise<AudioBuffer> {
  if (!audioContext) {
    audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return await audioContext.decodeAudioData(arrayBuffer);
}

const soundUrls = {
  click: ClickSound,
  sword_1: Sword_1,
  sword_2: Sword_2,
  sword_3: Sword_3,
  sword_4: Sword_4,
  grunt_1: Grunt_1,
  grunt_2: Grunt_2,
  grunt_3: Grunt_3,
  grunt_4: Grunt_4,
};

export async function loadAllSounds(): Promise<void> {
  await Promise.all(
    Object.entries(soundUrls).map(async ([name, url]) => {
      soundBuffers[name] = await loadSound(url);
    }),
  );
}

export function playSound(soundName: "grunt" | "sword" | "click"): void {
  let soundToPlay: string;

  if (soundName === "grunt" || soundName === "sword") {
    const availableSounds = Object.keys(soundBuffers).filter((key) =>
      key.startsWith(soundName),
    );
    const randomIndex = Math.floor(Math.random() * availableSounds.length);
    soundToPlay = availableSounds[randomIndex];
  } else {
    soundToPlay = soundName;
  }

  if (!audioContext) {
    audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }

  const buffer = soundBuffers[soundToPlay];
  if (buffer) {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
  } else {
    console.warn(`Sound "${soundName}" not found`);
  }
}
