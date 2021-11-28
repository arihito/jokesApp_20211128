import type { LoaderFunction } from "remix";
import { Link, useLoaderData } from "remix";
import type { Joke } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { joke: Joke };

export let loader: LoaderFunction = async ({ params }) => {
  let joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke) throw new Error("Joke は、見つかりません");
  let data: LoaderData = { joke };
  return data;
};

export default function JokeRoute() {
  let data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>これがあなたの陽気なジョークです:</p>
      <p>{data.joke.content}</p>
      <Link to=".">「{data.joke.name}」 へのパーマリンク</Link>
    </div>
  );
}
