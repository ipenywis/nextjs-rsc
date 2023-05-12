import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegShareSquare,
} from "react-icons/fa";

import { AiOutlineRetweet } from "react-icons/ai";

import { FiShare } from "react-icons/fi";

import { Prisma } from "@prisma/client";
import { timeAgo } from "@/lib/time-ago";

const TweetActions = () => (
  <div className="flex space-x-6 mt-3 text-gray-500 justify-evenly text-xl w-10/12 transition-all duration-300">
    <div className="cursor-pointer flex items-center space-x-1 group hover:text-blue-500 transition-colors duration-200">
      <FaRegComment className="group-hover:text-blue-500" />
      {/* <span>{0}</span> */}
    </div>
    <div className="cursor-pointer flex items-center space-x-1 group hover:text-green-500 transition-colors duration-200">
      <AiOutlineRetweet className="group-hover:text-green-500" />
      {/* <span>{0}</span> */}
    </div>
    <div className="cursor-pointer flex items-center space-x-1 group hover:text-red-500 transition-colors duration-200">
      <FaRegHeart className="group-hover:text-red-500" />
      {/* <span>{0}</span> */}
    </div>
    <div className="cursor-pointer flex items-center space-x-1 group hover:text-blue-500 transition-colors duration-200">
      <FiShare className="group-hover:text-blue-500" />
    </div>
  </div>
);

type TweetWithAuthor = Prisma.TweetGetPayload<{
  include: { author: true };
}>;

interface TweetProps {
  tweet: TweetWithAuthor;
}

export default function Tweet({ tweet }: TweetProps) {
  return (
    <div className="flex flex-col border-b border-gray-600 p-4 max-w-2xl">
      <div className="flex space-x-3">
        <img
          className="h-14 w-14 rounded-full"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="User profile"
        />
        <div className="flex-1">
          <div className="flex items-center text-lg">
            <h4 className="font-bold">{tweet?.author?.name}</h4>
            <p className="ml-2 text-gray-500">@{tweet.author.name}</p>
            <span className="mx-1 text-gray-500">·</span>
            <p className="text-gray-500">
              {timeAgo(new Date(tweet.createdAt))}
            </p>
          </div>
          <p className="mt-2 text-white font-base text-2xl">{tweet.text}</p>
          <div className="flex space-x-6 mt-3 text-gray-500">
            <TweetActions />
          </div>
        </div>
      </div>
    </div>
  );
}
