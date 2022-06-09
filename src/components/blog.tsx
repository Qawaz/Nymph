import { FunctionComponent } from "react";
import Image from "next/image";

type Props = {
  tag: string;
  image_url: string;
  title: string;
  date: string;
};

const Blog: FunctionComponent<Props> = ({
  tag,
  image_url,
  title,
  date,
}): JSX.Element => (
  <>
    <article>
      <div className="h-full cover absolute flex flex-col items-start py-6 px-5">
        <div className="flex-1">
          <div className="font-urbanist font-bold flex-1 bg-yellow-400 text-white text-sm left-5 px-4 py-1">
            {tag}
          </div>
        </div>
        <h3 className="font-urbanist text-2xl text-white font-bold pb-4">
          {title}
        </h3>
        <time className="font-urbanist text-sm font-bold text-white">
          {date}
        </time>
      </div>
      <Image
        src={image_url}
        width={400}
        height={500}
        alt={title}
        layout="raw"
      />
    </article>
    <style jsx>
      {`
        .cover {
           {
            /* background: -webkit-linear-gradient(
            -90deg,
            transparent 200px,
            #02071a
          ); */
          }
        }
        article:hover img {
          display: none !important;
        }
      `}
    </style>
  </>
);

export default Blog;