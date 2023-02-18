const typeEnum = require('./.cz-config')
module.exports = {
  extends: ['cz'],
  // 自定义 rules
  plugins: [
    {
      rules: {
        'header-match-team-pattern': params => {
          console.error('subject: ', params)
          typeEnum.types.includes()
          const pass = params.subject && !params.subject.includes('?')
          const message = `subject 不能为空且不能包含?符号`
          return [pass, message]
        }
      }
    }
  ],
  rules: {
    'type-enum': [2, 'always', typeEnum.types.map(i => i.value)],
    'scope-enum': [2, 'always', typeEnum.scopes.map(i => i.name)],
    'subject-empty': [2, 'never']
    // 'header-match-team-pattern': [2, 'always']
  }
}
