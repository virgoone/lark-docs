module.exports = function (api) {
  api.cache(true)

  const presets = ['next/babel']
  const plugins = [
    [
      'babel-plugin-import',
      {
        libraryName: '@lark-org/editor',
        libraryDirectory: 'lib',
        style: false,
      },
      '@lark-org/editor',
    ],
    // [
    //   'babel-plugin-import',
    //   {
    //     libraryName: '@lark-org/ui',
    //     style: (name) => `${name}/style.css`,
    //   },
    // ],

    [
      'babel-plugin-import',
      {
        libraryName: '@lark-org/tool',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
      },
      '@lark-org/tool',
    ],
    [
      '@emotion',
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: false,
        autoLabel: 'never',
        labelFormat: '[dirname]',
        cssPropOptimization: true,
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
