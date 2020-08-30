const adjectives = [
  'Adamant',
  'Instinctive',
  'Actually',
  'Husky',
  'Bent',
  'Fascinated',
  'Sexual',
  'Mute',
  'Silent',
  'Coherent',
  'Juvenile',
  'Naughty',
  'Foreign',
  'Earthy',
  'Diligent',
  'Anxious',
  'Adorable',
  'Quack',
  'Unequal',
  'Sharp',
];

const animals = [
  'Chimpanzee',
  'Bison',
  'Squirrel',
  'Lemur',
  'Wolf',
  'Dingo',
  'Colt',
  'Seal',
  'Cougar',
  'Ram',
  'Parakeet',
  'Goat',
  'Ape',
  'Basilisk',
  'Oryx',
  'Iguana',
  'Stallion',
  'Jackal',
  'Snake',
  'Zebra',
];

// const links: { [index: string]: RegExp } = {
//   MATCH_URL_YOUTUBE: /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
//   MATCH_URL_SOUNDCLOUD: /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
//   MATCH_URL_VIMEO: /vimeo\.com\/.+/,
//   MATCH_URL_FACEBOOK: /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
//   MATCH_URL_STREAMABLE: /streamable\.com\/([a-z0-9]+)$/,
//   MATCH_URL_WISTIA: /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/,
//   MATCH_URL_TWITCH_VIDEO: /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
//   MATCH_URL_TWITCH_CHANNEL: /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
//   MATCH_URL_DAILYMOTION: /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,
//   MATCH_URL_MIXCLOUD: /mixcloud\.com\/([^/]+\/[^/]+)/,
//   MATCH_URL_VIDYARD: /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/,
// };

export const generateAnonName = (): string => {
  const adj: string = adjectives[Math.floor(Math.random() * 20)];
  const animal: string = animals[Math.floor(Math.random() * 20)];
  return adj + ' ' + animal;
};

export const secondsToTimestamp = (seconds: number): string => {
  const timestamp = new Date(seconds * 1000).toISOString().substr(11, 8);
  if (timestamp.substr(0, 2) === '00') {
    return timestamp.substr(3);
  }
  return timestamp;
};

export const timestampToSeconds = (timestamp: string): number => {
  let arr: string[];
  arr = timestamp.split(':');
  if (timestamp.length === 8) {
    return +arr[0] * 60 * 60 + +arr[1] * 60 + +arr[2];
  }
  return +arr[0] * 60 + +arr[1];
};

export const SYNC_MARGIN = 3000; // in milliseconds
