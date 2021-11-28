import { PrismaClient } from "@prisma/client";
let db = new PrismaClient();

async function seed() {
  await Promise.all(
    getJokes().map(joke => {
      return db.joke.create({ data: joke });
    })
  );
}

seed();

function getJokes() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      name: "道路労働者",
      content: "父が道路労働者としての仕事から盗んでいるとは信じたくなかった。 しかし、私が家に帰ったとき、すべての兆候がそこにありました。"
    },
    {
      name: "フリスビー",
      content: "フリスビーが大きくなっているのはなぜだろうと思っていたのですが、それが私を襲いました。」"
    },
    {
      name: "木",
      content: "晴れた日に木が不審に見えるのはなぜですか？ ダンノ、彼らはちょっと日陰だ。」"
    },
    {
      name: "スケルトン",
      content: "なぜスケルトンはジェットコースターに乗らないのですか？ 彼らはそれのための胃を持っていません。」"
    },
    {
      name: "カバ",
      content: "木に隠れているカバを見つけてみませんか？ 彼らは本当にそれが得意です。」"
    },
    {
      name: "ディナー",
      content: "一方のプレートがもう一方のプレートに何と言ったのですか？ 夕食は私にあります！ `"
    },
    {
      name: "エレベーター",
      content: "初めてエレベーターを利用したのは、気分が高揚した経験でした。 二度目は私をがっかりさせた。"
    }
  ];
}
