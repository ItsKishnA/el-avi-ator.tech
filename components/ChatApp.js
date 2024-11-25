import Bullets from "@/constants/bullets";
import { Typography } from "./Typography";

const ChatApp = () => {
  return (
    <div className="flex boxed flex-col p-4">
      <div className="flex flex-col gap-2 items-center">
        <div className="w-full flex justify-start">
          <img
            src="./images/SS_Chatters.png"
            alt="Chat App (1)"
            className=" rounded-xl"
            width={213}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-full flex justify-end">
          <img
            src="./images/SS_Chat.png"
            alt="Chat App (2)"
            className="rounded-xl bg-slate-500"
            width={213}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex flex-col mt-2 flex-wrap">
        <div className="flex flex-row items-center justify-between">
          {/* <h1 className="font-bold text-lg text-sky-300">Chat App</h1> */}

          <Typography variant="h4" className="text-sky-300 font-bold">
            Chat App UI
          </Typography>

          <a href="https://github.com/ItsKishnA/MyChatApp" target="_blank">
            {/* <h3 className="font-mono text-md text-gray-100 underline">Code</h3> */}

            <Typography
              variant="h5"
              className="text-gray-100 underline font-mono"
            >
              Code
            </Typography>
          </a>
        </div>

        <Typography variant="p" className="text-gray-400 font-mono">
          A unique conceptual Chat-Application built using React Native.
        </Typography>

        {/* <div> */}
        <Bullets
          title={["React Native", "Firebase", "Expo"]}
          bgColor={["#AE862580"]}
          textColor={["#F7EF8ACC"]}
          borderColor={["#FAF39855"]}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ChatApp;
