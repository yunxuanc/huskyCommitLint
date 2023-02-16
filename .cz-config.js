module.exports = {
  types: [
    { value: 'init', name: 'init 🎉:    初始化' },
    { value: 'feat', name: 'feat ✨:    新增功能' },
    { value: 'fix', name: 'fix 🐛:    修复BUG' },
    { value: 'docs', name: 'docs 📄:    变更文档' },
    { value: 'style', name: 'style 💄:    修改样式' },
    { value: 'refactor', name: 'refactor 🎸:    代码重构' },
    { value: 'perf', name: 'perf ⚡:    性能提升' },
    { value: 'test', name: 'test ✅:    测试内容' },
    { value: 'revert', name: 'revert ⏪:     版本回滚' },
    { value: 'build', name: 'build 📦:     打包构建' },
    {
      value: 'chore',
      name: 'chore 🚀:    开发工具变动(构建/工程依赖/工具)'
    },
    { value: 'ci', name: 'ci 🪤:    CI配置 ' }
  ],
  scopes: [
    { name: 'pages' },
    { name: 'components' },
    { name: 'utils' },
    { name: 'styles' },
    { name: 'deps' },
    { name: 'other' }
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    customScope: '请输入自定义的scope:',
    subject: '短说明:',
    body: '长说明，使用"|"换行 (可选):',
    breaking: '非兼容性说明 (可选):',
    footer: '关联关闭的Tapd, 例如：#ID1087493 (可选):',
    confirmCommit: '确定提交说明? (yes/no)'
  },
  allowCustomScopes: true,
  subjectLimit: 100
}
