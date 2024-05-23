import { useMDXComponent } from "next-contentlayer/hooks";
import Image, { ImageProps } from "next/image";

const components = {
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props: ImageProps) => <Image {...props} />,
};

interface MdxProps {
  code: string;
  className?: string;
}

const Mdx = ({ code, className }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose dark:prose-invert min-w-full break-keep break-words">
      <Component className={className} components={components} />
    </article>
  );
};

export default Mdx;
