

```shell
# run code
npm run start
npm run build
npm run serve

npm run start -- --locale zh-Hans
```

翻译markdown文件 [link](https://docusaurus.io/zh-CN/docs/i18n/tutorial#translate-markdown-files)

```shell
# other code
# copy docs
cp -r docs/** i18n/zh-Hans/docusaurus-plugin-content-docs/current
# copy pages
cp -r src/pages/**.md i18n/zh-Hans/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/zh-Hans/docusaurus-plugin-content-pages
```

翻译json文件
```shell
# 运行更新json文件后，可以翻译对应词语
npm run write-translations -- --locale zh-Hans
```
