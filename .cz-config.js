module.exports = {
  types: [
    {
      value: ':construction: wip',
      name: '💪  wip:    进展中(Work in progress)'
    },
    { value: ':sparkles: feat', name: 'feat ✨:    新功能' },
    { value: ':bug: fix', name: 'fix 🐛:    修复BUG' },
    { value: ':bug: refactor', name: 'refactor 🔨:    重构' },
    { value: ':art: style', name: 'style 🎨:    ui样式' },
    { value: ':robot: perf', name: 'perf ⚡:    性能优化' },
    { value: ':bug: docs', name: 'docs 📝:    文档' },
    { value: ':white_check_mark: test', name: 'test ✅:    测试' },
    { value: 'revert', name: 'revert ⏪:     版本回退' },
    {
      value: ':rocket: chore',
      name: 'chore 🚀:    构建或依赖工具变更)'
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
