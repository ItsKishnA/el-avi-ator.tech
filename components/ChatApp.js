const ChatApp = () => {
  return (
    <div className="flex boxed flex-col p-4">
      <div className="flex flex-col gap-2 items-center">
        <div className="w-full flex justify-start">
          <img
            src="https://via.placeholder.com/160x90"
            alt="Chat App (1)"
            className=" rounded-xl"
            width={213}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-full flex justify-end">
          <img
            src="https://via.placeholder.com/160x90"
            alt="Chat App (2)"
            className="rounded-xl bg-slate-500"
            width={213}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex flex-col mt-2  flex-wrap">
        <h1 className="font-bold text-lg">Chat App</h1>
        <p className="text-gray-400 font-mono">
          A simple chat application built using ReactJS
        </p>
      </div>
    </div>
  );
};

export default ChatApp;
