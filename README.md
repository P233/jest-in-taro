_This repo is just used to identify a Taro issue with Jest and Enzyme._

问题描述：Enzyme 的 `mount` 与 `render` 无法引入作为测试的 `HomePage` 组件。
报错内容：`Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.`

尝试将 `HomePage` (`./src/pages/index/index.jsx`) 中 Taro 的 `<View />` 组件替换为 `<view />`，可以成功执行测试，只是警告 `The tag <view> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.`。
