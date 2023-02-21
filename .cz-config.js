module.exports = {
  // types: [
  //   {
  //     value: 'wip',
  //     name: '💪  wip:    进展中(Work in progress)'
  //   },
  //   { value: ':sparkles: feat', name: 'feat ✨:    新功能' },
  //   { value: '🐛 fix', name: 'fix 🐛:    修复BUG' },
  //   { value: 'docs', name: 'docs 📝:    文档' },
  //   { value: 'style', name: 'style 🎨:    ui样式' },
  //   { value: 'refactor', name: 'refactor 🔨:    重构' },
  //   { value: 'perf', name: 'perf ⚡:    性能优化' },
  //   { value: 'test', name: 'test ✅:    测试' },
  //   {
  //     value: 'chore',
  //     name: 'chore 🚀:    构建或依赖工具变更)'
  //   },
  //   { value: 'revert', name: 'revert ⏪:     版本回退' },
  //   { value: 'build', name: 'build 🪤:    构建部署 ' }
  // ],
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat:     新功能'
    },
    {
      value: ':bug: fix',
      name: '🐛 fix:      修复bug'
    },
    {
      value: ':tada: init',
      name: '🎉 init:     初始化'
    },
    {
      value: ':pencil2: docs',
      name: '✏️  docs:     文档变更'
    },
    {
      value: ':lipstick: style',
      name: '💄 style:    代码的样式美化'
    },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor: 重构'
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:     性能优化'
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test:     测试'
    },
    {
      value: ':rewind: revert',
      name: '⏪️ revert:   回退'
    },
    {
      value: ':package: build',
      name: '📦️ build:    打包'
    },
    {
      value: ':rocket: chore',
      name: '🚀 chore:    构建/工程依赖/工具'
    },
    {
      value: ':construction_worker: ci',
      name: '👷 ci:       CI related changes'
    }
  ],
  scopes: [
    { name: 'pages' },
    { name: 'components' },
    { name: 'utils' },
    { name: 'styles' },
    { name: 'deps' },
    { name: 'other' }
  ],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    customScope: '请输入自定义的scope:',
    subject: '短说明:',
    body: '长说明，使用"|"换行 (可选):',
    breaking: '非兼容性说明 (可选):',
    footer: '关联关闭的Issue, 例如：#111 (可选):',
    confirmCommit: '确定提交说明? (yes/no)'
  },
  allowCustomScopes: true
}
