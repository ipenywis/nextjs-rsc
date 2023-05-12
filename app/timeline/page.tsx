import Tweet from "@/components/tweet";
import prisma from "@/lib/prisma";

export default async function Page() {
  const tweets = await prisma.tweet.findMany({ include: { author: true } });

  console.log("Tweets from DB: ", tweets);

  return tweets.map((tweet: any, idx: number) => (
    <Tweet key={idx} tweet={tweet} />
  ));
}
