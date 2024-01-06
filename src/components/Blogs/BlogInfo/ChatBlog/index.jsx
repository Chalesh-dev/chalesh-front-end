import WriteComment from "./WriteComment";
import ShowComments from "./ShowComments";

const ChatBlog = ({ comments }) => {
  console.log(comments);
  return (
    <div className="flex m-auto justify-center w-[500px] bg-[white] rounded-lg drop-shadow-md flex-col items-center">
      <p className="text-lg p-5 text-black text-left font-bold w-full">
        Responses ({comments.length})
      </p>

      <WriteComment />

      {/* show comments */}

      <div className="border-t border-gray-500 mt-3 w-full text-left text-black/70 text-[0.8rem] p-2">
        {
            comments?.length > 0 && comments?.map((item, index) => (
                <ShowComments key={index} comment={item} />
            ))
        }
      </div>

    </div>
  );
};

export default ChatBlog;
