import { createTwc, cx } from 'react-twc';
import { twMerge } from 'tailwind-merge';

export const compose: typeof cx = (...inputs) => twMerge(cx(inputs));

export const twc = createTwc({ compose });
