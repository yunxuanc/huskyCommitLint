module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ]
  },
  prompt: {
    questions: {
      type: {
        description: '选择一种提交类型：',
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨'
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛'
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚'
          },
          style: {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎'
          },
          refactor: {
            description:
              'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦'
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀'
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨'
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠'
          },
          ci: {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️'
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️'
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑'
          }
        }
      },
      scope: {
        description: '选择一个scope (可选):'
      },
      subject: {
        description: '修改内容简短说明:'
      },
      body: {
        description: '修改内容详细说明 (可选):'
      },
      // isBreaking: {
      //   description: '非兼容性说明 (可选):'
      // },
      // breakingBody: {
      //   description:
      //     'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself'
      // },
      breaking: {
        description: '非兼容性说明 (可选):'
      },
      // isIssueAffected: {
      //   description: 'Does this change affect any open issues?'
      // },
      // issuesBody: {
      //   description:
      //     'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
      // },
      // issues: {
      //   description: 'Add issue references (e.g. "fix #123", "re #123".)'
      // }
      confirmCommit: '确定提交说明? (yes/no):'
    }
  }
}
