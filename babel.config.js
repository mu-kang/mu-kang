// module.exports = {
//   presets: ["@vue/cli-plugin-babel/preset"],
// };

const plugins = ["@vue/babel-plugin-transform-vue-jsx"];
// 生产环境 production 移除console 开发环境 development
if (process.env.NODE_ENV === "production") {
  plugins.push("transform-remove-console");
}
module.exports = {
  plugins: plugins,
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        modules: false,
        targets: {
          browsers: [
            "> 1%",
            "last 2 versions",
            "not ie <= 8",
            "Android >= 4",
            "iOS >= 8",
          ],
        },
        useBuiltIns: "entry",
      },
    ],
  ],
};
