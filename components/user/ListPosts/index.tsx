import PostCard from '../PostCard';

interface ListPostsProps {
  posts: any[];
}

const ListPosts = ({ posts }: ListPostsProps) => {
  return (
    <div className="space-y-3">
      {posts.map((post, __index) => (
        <PostCard
          key={post.id}
          text={post.text}
          numberLikes={post.likes}
          ownerPhoto={post.owner.picture}
          ownerName={post.owner.firstName}
          publishDate={post.publishDate}
          index={__index}
        />
      ))}
    </div>
  );
};

export default ListPosts;
