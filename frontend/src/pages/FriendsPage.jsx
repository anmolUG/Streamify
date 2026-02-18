import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import { UsersIcon } from "lucide-react";
import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendsPage = () => {
  const { data: friends = [], isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <UsersIcon className="size-8 text-primary" />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Friends</h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : friends.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {friends
              .filter(friend => friend && friend._id && friend.profilePic)
              .map((friend) => (
                <FriendCard key={friend._id} user={friend} />
              ))
            }
          </div>
        ) : (
          <NoFriendsFound />
        )}
      </div>
    </div>
  );
};

export default FriendsPage;