//.prettier.js
module.exports = {
  // 箭头函数只有一个参数的时候可以忽略括号
  arrowParens: 'avoid',
  // 括号内部不要出现空格
  bracketSpacing: true,
  // 换行符使用 crlf/lf/auto
  endOfLine: 'auto',
  // 在jsx中把'>' 是否单独放一行
  jsxBracketSameLine: true,
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 行宽
  printWidth: 100,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 分号
  semi: false,
  // 字符串使用单引号
  singleQuote: true,
  // 缩进
  tabWidth: 2,
  // 使用 tab 缩进
  useTabs: false,
  // 末尾不需要逗号
  trailingComma: 'none',
  parser: 'typescript'
}
