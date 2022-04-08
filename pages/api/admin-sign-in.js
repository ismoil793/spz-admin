// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { allowedUsers } = process.env;

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i + 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function handler(req, res) {
  const { body, method } = req;

  const { uName, password } = body;

  if (method === "POST") {
    const token = makeid(64);

    const idx = allowedUsers?.findIndex(
      (user) => user.uName === uName && user.password === password
    );

    if (idx > -1) return res.status(200).json({ token, success: true });
  }
  return res.status(200).json({ message: "Fuck you, bitch!" });
}
