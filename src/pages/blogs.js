import React from "react"
import { Link , graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blogs = ({data}) => {
    const blogPosts = data.allContentfulBlogPost.edges;
    return (
  <Layout>
    <SEO title="GECKO Blogs" />
    <h1>{"Here's a list of all blogs!"}</h1>
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <img alt={post.title} src={post.image.file.url} />
            <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
  </Layout>
);
};
export default Blogs;

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          image {
            file {
              url
            }
          }
          tags
        }
      }
    }
  }
`;
