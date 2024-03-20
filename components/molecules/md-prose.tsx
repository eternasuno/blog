import type { ComponentProps } from 'react';
import Prose from '../atoms/prose';
import Markdown from './markdown';

type Props = Omit<ComponentProps<typeof Prose>, 'asChild' | 'children'> & {
  markdown: string;
};

const MDProse = async ({ markdown, ...rest }: Props) => (
  <Prose {...rest}>
    <Markdown markdown={markdown} />
  </Prose>
);

export default MDProse;
