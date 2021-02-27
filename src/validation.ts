import * as T from 'io-ts';
import { isRight } from 'fp-ts/lib/Either';

const soundConfigurationType = T.type({
  sounds: T.array(
    T.type({
      name: T.string,
      aliases: T.array(T.string),
      file: T.string,
      volume: T.union([T.number, T.undefined]),
    })
  ),
  redeemable: T.type({
    tts: T.type({
      name: T.string,
      volume: T.union([T.number, T.undefined]),
    }),
    sfx: T.type({
      prefix: T.union([T.string, T.undefined]),
    }),
  }),
});

type SoundConfiguration = T.TypeOf<typeof soundConfigurationType>;

export function isValidSoundConfiguration(v: unknown): v is SoundConfiguration {
  return isRight(soundConfigurationType.decode(v));
}
