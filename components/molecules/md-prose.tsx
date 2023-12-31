import { renderToHtml } from '../../lib/markdown';
import Prose from '../atoms/prose';

type Props = {
  className?: string;
  markdown: string;
};

const MDProse = async ({ markdown, className }: Props) => {
  const html = await renderToHtml(markdown);

  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: html is render at server
    <Prose className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default MDProse;
