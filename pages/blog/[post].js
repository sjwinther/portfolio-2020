import Link from "next/link";
import Error from "next/error";
import "../../css/markdown.css";

import Head from "../../components/Head";

const Post = ({ post }) => {
  const { data, content } = post;
  const ReactMarkdown = require("react-markdown");
  if (post)
    return (
      <>
        <Head />
        <ReactMarkdown source={content} escapeHtml={false} />
      </>
    );
  return <Error statusCode={404} />;
};

Post.getInitialProps = async ({ query }) => {
  const matter = require("gray-matter");
  let post;
  try {
    const file = await require(`../../content/blog/${query.post}.md`);
    post = matter(file.default);
  } catch (e) {
    post = false;
  }
  return {
    post
  };
};

export default Post;
