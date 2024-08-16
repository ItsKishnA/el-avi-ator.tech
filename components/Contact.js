"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import contactSection from "../public/data/contactSection.json";

const ContactMe = () => {
  const [iconSize, setIconSize] = useState(40);
  const data = contactSection.connector;

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth >= 1024) {
        setIconSize(50);
      } else if (window.innerWidth >= 768) {
        setIconSize(40);
      } else if (window.innerWidth >= 640) {
        setIconSize(40);
      } else {
        setIconSize(35);
      }
    };

    window.addEventListener("resize", updateIconSize);
    updateIconSize(); // Set initial size

    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  const Icon = ({ iconName }) => {
    let color;
    let viewBoxValue;
    let pathD;

    if (iconName === "Gmail") {
      color = null;
      viewBoxValue = "0 0 48 48";
      pathD = [
        {
          fill: "#4caf50",
          d: "M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z",
        },
        {
          fill: "#1e88e5",
          d: "M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z",
        },
        {
          fill: "#e53935",
          d: "M35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17",
        },
        {
          fill: "#c62828",
          d: "M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z",
        },
        {
          fill: "#fbc02d",
          d: "M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z",
        },
      ];
    } else if (iconName === "LinkedIn") {
      color = "#0077B5";
      viewBoxValue = "0 0 50 50";
      pathD =
        "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z";
    } else if (iconName === "GitHub") {
      color = "#fff";
      viewBoxValue = "0 0 64 64";
      pathD =
        "M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z";
    } else if (iconName === "twitter") {
      color = "#fff";
      viewBoxValue = "0 0 48 48";
      pathD =
        "M11 4C7.134 4 4 7.134 4 11v32c0 2.866 3.134 5 7 5h28c2.866 0 5-2.134 5-5V11c0-2.866-2.134-7-5-7H11zM13.085938 13L21.023438 13 26.660156 21.009766 33.5 13 36 13 27.789062 22.613281 37.914062 37 29.978516 37 23.4375 27.707031 15.5 37 13 37 22.308594 26.103516 13.085938 13zM16.914062 15L31.021484 35 34.085938 35 19.978516 15 16.914062 15z";
    }

    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox={viewBoxValue}
        style={{ fill: color }}
      >
        {Array.isArray(pathD) ? (
          pathD.map((path, index) => (
            <path key={index} fill={path.fill} d={path.d} />
          ))
        ) : (
          <path d={pathD} />
        )}
      </svg>
    );
  };

  const ContactElement = ({ cardName, title, toCopy, toLink }) => {
    const [showCopied, setShowCopied] = useState(false);

    const handleClick = () => {
      navigator.clipboard.writeText(toCopy);
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 3000);
    };

    console.log(cardName + " " + title + " " + toCopy + " " + toLink);
    return (
      <div className="flex flex-col p-4">
        <h3 className="text-gray-600 text-base">
          <span>
            {title}
            <b className="text-white">{cardName}</b>
          </span>
        </h3>

        <div className="flex justify-between">
          {/* icon to redirect follower */}
          <Link href={toLink} target="_blank">
            {/* //TODO */}
            <Icon iconName={cardName} />
          </Link>

          {/* copy to clipboard button */}
          <button
            className="flex items-center bg-gray-800 bg-opacity-50 px-5 py-1 m-2 rounded-full text-sm text-gray-500 border border-gray-700"
            onClick={handleClick}
          >
            {toCopy}
            {showCopied ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                style={{
                  fill: "#6b7280",
                  marginLeft: "8px",
                }}
              >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 15-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8z" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                style={{
                  fill: "#6b7280",
                  marginLeft: "8px",
                }}
              >
                <path d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 flex flex-col w-full">
      {/* make a div and add classname and change font to crimson text */}

      <h2 className="text-2xl font-bold leading-loose">Contact Me</h2>

      {/* <ContactCard // linkedin
        cardName="linkedin"
        title={
          <span>
            Follow me on <b className="text-white">LinkedIn</b>
          </span>
        }
        toLink={"https://www.linkedin.com/in/avi-mahajan2401/"}
        toCopy={"avi-mahajan2401"}
      />

      <ContactCard // github
        cardName="github"
        title={
          <span>
            Connect me on <b className="text-white">GitHub</b>
          </span>
        }
        toLink={"https://www.github.com/ItsKishnA"}
        toCopy={"ItsKishnA"}
      />

      <ContactCard // gmail
        cardName="gmail"
        title={
          <span>
            Write me a <b className="text-white">Mail</b>
          </span>
        }
        toLink={
          "mailto:avi.knw@gmail.com?subject=Feedback&body=I would like to appreciate your work as I..."
        }
        toCopy={"avi.knw@gmail.com"}
      /> */}

      {data.map((data, index) => (
        <ContactElement
          key={index}
          cardName={data.Card}
          title={data.Quote}
          toLink={data.Link}
          toCopy={data.toCopy}
        />
      ))}
    </div>
  );
};

const MessageMe = () => {
  return (
    // <div id="MESSAGE" className="flex flex-col flex-1 p-4">
    <div id="MESSAGE" className="w-[95%] p-4 flex flex-col">
      <h2 className="text-2xl font-bold leading-loose">Drop a message</h2>

      <form className="flex flex-col flex-1">
        <div className="flex flex-col flex-wrap">
          <h3 className="text-gray-600 text-base px-2">
            How much did you like our website?
          </h3>
          <div className="flex flex-row-reverse items-center content-center justify-evenly mt-1 flex-wrap mb-5">
            <input
              type="radio"
              id="happy"
              name="satisfaction"
              value="happy"
              className="peer/happy hidden"
              defaultChecked
            />
            <label
              htmlFor="happy"
              className="cursor-pointer py-1 px-0.5 text-2xl peer-checked/happy:bg-white peer-checked/happy:rounded-full peer-checked/happy:border peer-checked/happy:border-black"
            >
              😊
            </label>

            <input
              type="radio"
              id="good"
              name="satisfaction"
              value="good"
              className="peer/good hidden"
            />
            <label
              htmlFor="good"
              className="cursor-pointer py-1 px-0.5 text-2xl peer-checked/good:bg-white peer-checked/good:rounded-full peer-checked/good:border peer-checked/good:border-black"
            >
              😀
            </label>

            <input
              type="radio"
              id="neutral"
              name="satisfaction"
              value="neutral"
              className="peer/neutral hidden"
            />
            <label
              htmlFor="neutral"
              className="cursor-pointer py-1 px-0.5 text-2xl peer-checked/neutral:bg-white peer-checked/neutral:rounded-full peer-checked/neutral:border peer-checked/neutral:border-black"
            >
              😐
            </label>

            <input
              type="radio"
              id="sad"
              name="satisfaction"
              value="sad"
              className="peer/sad hidden"
            />
            <label
              htmlFor="sad"
              className="cursor-pointer py-1 px-0.5 text-2xl peer-checked/sad:bg-white peer-checked/sad:rounded-full peer-checked/sad:border peer-checked/sad:border-black"
            >
              😞
            </label>

            <input
              type="radio"
              id="angry"
              name="satisfaction"
              value="angry"
              className="peer/angry hidden"
            />
            <label
              htmlFor="angry"
              className="cursor-pointer py-1 px-0.5 text-2xl peer-checked/angry:bg-white peer-checked/angry:rounded-full peer-checked/angry:border peer-checked/angry:border-black"
            >
              😡
            </label>
          </div>
        </div>

        <h3 className="text-gray-600 text-base px-2">
          Do you have any thoughts you'd like to share?
        </h3>
        <textarea
          placeholder="Message"
          style={styles.input}
          // className="p-2 m-2 flex-1 rounded-sm"
          // required
        />
        {/* <input
          type="email"
          placeholder="Email"
          style={styles.input}
          // className="p-2 m-2 flex-1 text-gray-600"
          // required
        /> */}
        <h3 className="text-gray-600 text-base px-2">
          Dou you want me to contact you back?
        </h3>
        <div className="flex flex-row items-center justify-start space-x-4 mt-1 flex-wrap mb-5">
          <input
            type="radio"
            id="agree"
            name="reach"
            value="agree"
            className="peer/agree hidden"
            defaultChecked
          />
          <label
            htmlFor="agree"
            className="cursor-pointer px-3 py-0.5 text-xl content-center items-center peer-checked/agree:bg-red-700 peer-checked/agree:rounded-2xl peer-checked/agree:border peer-checked/agree:border-black"
          >
            Yes
          </label>

          <input
            type="radio"
            id="disagree"
            name="reach"
            value="disagree"
            className="peer/disagree hidden"
          />
          <label
            htmlFor="disagree"
            className="cursor-pointer px-3 py-0.5 content-center items-center text-xl peer-checked/disagree:bg-red-700 peer-checked/disagree:rounded-full peer-checked/disagree:border peer-checked/disagree:border-black"
          >
            No
          </label>
        </div>

        <button
          type="submit"
          className="p-2 m-2  border border-gray-600 rounded-full text-sm mx-[15%] hover:bg-white transition duration-300 hover:text-black hover:font-bold hover:border-black"
        >
          Send
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center md:flex-row w-full md:h-full">
      <div
        // style={styles.components}
        className="md:flex flex-1 justify-center px-4 flex mx-2 w-[90%]"
      >
        <MessageMe />
      </div>
      <div
        style={styles.components}
        className="flex flex-[1] p-2 justify-center w-[85%]"
      >
        <ContactMe />
      </div>
    </div>
  );
};

const styles = {
  components: {
    // height: "50vh",
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
    // justifyItems: "center",
    // padding: "0rem",
  },
  input: {
    margin: "0.5rem",
    padding: "0.5rem",
    borderRadius: "0.125rem",
    color: "#0f0f0f",
  },
};

export default Contact;
