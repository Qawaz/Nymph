import { FunctionComponent } from "react";
import Blog from "../blog";

const BlogsSection: FunctionComponent = (): JSX.Element => {
  const blogs = [
    {
      tag: "Version 1.0",
      title: "Stable version of whisper messenger released!",
      image_url:
        "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      date: "2 Days ago",
    },
    {
      tag: "Version 1.0",
      title: "Stable version of whisper messenger released!",
      image_url:
        "https://images.unsplash.com/photo-1620748229976-a78c7e0932a0?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
      date: "2 Days ago",
    },
    {
      tag: "Version 1.0",
      title: "Stable version of whisper messenger released!",
      image_url:
        "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      date: "2 Days ago",
    },
    {
      tag: "Version 1.0",
      title: "Stable version of whisper messenger released!",
      image_url:
        "https://images.unsplash.com/photo-1620748229976-a78c7e0932a0?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
      date: "2 Days ago",
    },
  ];

  return (
    <>
      <section className="relative flex w-full overflow-x-auto snap-x py-16">
        <div className="scroll-ml-6 w-64 snap-center shrink-0 relative px-6" />
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative scroll-ml-6 snap-center shrink-0 pl-10"
          >
            <Blog
              tag={blog.tag}
              title={blog.title}
              image_url={blog.image_url}
              date={blog.date}
            />
          </div>
        ))}
        <div className="scroll-ml-6 w-20 snap-center shrink-0 relative px-6" />
      </section>
      <style jsx>
        {`
          .cover {
            background: -webkit-linear-gradient(
              -90deg,
              transparent 200px,
              #02071a
            );
          }
        `}
      </style>
    </>
  );
};

export default BlogsSection;
