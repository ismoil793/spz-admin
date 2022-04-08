const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  reactStrictMode: true,
  env: {
    API_TOKEN: "$2a$12$9o.c7thWW10m1PCtmDvto.DEoRn1Pye7jfU0vtXuJZJl02lij2sRy",
    allowedUsers: [
      {
        uName: "trast@admin.uz",
        password: "vZDA92AO3e0g",
      },
      {
        uName: "test",
        password: "test",
      },
    ],
  },
};
