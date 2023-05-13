import Tweet from "@/components/tweet";
import prisma from "@/lib/prisma";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
  const tweets = await prisma.tweet.findMany({ include: { author: true } });

  await wait(5000);

  return tweets.map((tweet: any, idx: number) => (
    <Tweet key={idx} tweet={tweet} />
  ));
}
