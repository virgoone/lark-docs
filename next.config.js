const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { addLeadingSlash } = require('@docusaurus/utils')

const remarkPlugins = [
  require('remark-autolink-headings'),
  require('remark-emoji'),
  require('remark-images'),
  require('remark-slug'),
  require('remark-unwrap-images'),
]
const withMdx = require('next-mdx-enhanced')

function fileToPath(str) {
  return addLeadingSlash(str.replace('.mdx', ''))
}
const mdxConfig = {
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins,
  rehypePlugins: [],
  extendFrontMatter: {
    process: async (_, frontmatter) => {
      const { __resourcePath: mdxPath, tags } = frontmatter

      // get the slug
      const slug = frontmatter.slug || fileToPath(mdxPath)

      return {
        slug,
        tags,
      }
    },
  },
}
const defaultConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack5: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => ({
    ...config,
  }),
}

module.exports = withPlugins(
  [withBundleAnalyzer, withMdx(mdxConfig)],
  defaultConfig,
)

// module.exports = withMdx(defaultConfig)
