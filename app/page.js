"use client";

import About from "@/component/About";
import Image from "next/image";
import Link from "next/link";
import React, { useState, StyleSheet } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const mehh = {
    name: "Avi Mahajan",
    title: "Software Developer",
    location: "Indore, India",
  };

  const education = {
    college: {
      name: "Medi-Caps University",
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Science & Engineering (CSE)",
      year: "2021-2025 (Ongoing)",
    },
    school: {
      name: "Sophia Convent School",
      degree: "Senior Secondary School",
      major: "Science",
      location: "Khandwa",
      // year: "2017-2019",
    },
  };

  const projects = {
    portfolio: {
      name: "Portfolio",
      description: "Personal Portfolio Website",
      tech_stack: ["Next.js", "Tailwind CSS"],
      // github:"",
    },
    memo_game: {
      name: "Memo Game",
      description: "A simple memo game",
      tech_stack: ["React Native", "JavaScript", "Expo"],
      // github:"",
    },
    firebase_auth: {
      name: "Firebase Auth",
      description: "Firebase Authentication",
      tech_stack: ["React Native", "Firebase"],
      // github:"",
    },
  };

  const Project = ({ project }) => {
    return (
      <div className="p-5 bg-slate-900">
        <h3 className="text-2xl font-bold text-red-600">{project.name}</h3>
        <div className="flex flex-col ">A react native memo game</div>
      </div>
    );
  };

  const Projects = () => {
    return (
      <div id="PROJECTS" className="p-5">
        <h2 className="text-3xl font-bold leading-loose">Projects</h2>
        <Project project={projects.memo_game} />
      </div>
    );
  };

  const ContactMe = () => {
    const iconSize = 50;

    const Icon = ({ iconName }) => {
      let color;
      let viewBoxValue;
      let pathD;

      if (iconName === "gmail") {
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
      } else if (iconName === "linkedin") {
        color = "#0077B5";
        viewBoxValue = "0 0 50 50";
        pathD =
          "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z";
      } else if (iconName === "github") {
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

    const ContactCard = ({ cardName, title, toCopy, toLink }) => {
      const [showCopied, setShowCopied] = useState(false);

      const handleClick = () => {
        navigator.clipboard.writeText(toCopy);
        setShowCopied(true);
        setTimeout(() => {
          setShowCopied(false);
        }, 3000);
      };

      return (
        <div className="flex flex-col p-4">
          <h3 className="text-2xl text-gray-600">{title}</h3>

          <div className="flex justify-between">
            <Link href={toLink} target="_blank">
              <Icon iconName={cardName} />
            </Link>

            {/* <button
              className="flex items-center bg-gray-800 px-5 m-2 rounded-full text-sm text-gray-400"
              onClick={() => navigator.clipboard.writeText(toCopy)}
            >
              {toCopy}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                style={{ fill: "white", marginLeft: "8px" }}
              >
                <path d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" />
              </svg>
            </button> */}

            <button
              className="flex items-center bg-gray-800 px-5 m-2 rounded-full text-sm text-gray-400"
              onClick={handleClick}
            >
              {toCopy}
              {showCopied ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  style={{ fill: "white", marginLeft: "8px" }}
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 15-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8z" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  style={{ fill: "white", marginLeft: "8px" }}
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
      <div className="p-4 flex flex-col">
        <h2 className="text-3xl font-bold leading-loose">Contact Me</h2>

        <ContactCard
          cardName="linkedin"
          title={
            <span>
              Follow me on <b className="text-white">LinkedIn</b>
            </span>
          }
          toLink={"https://www.linkedin.com/in/avi-mahajan2401/"}
          toCopy={"avi-mahajan2401"}
        />

        <ContactCard
          cardName="twitter"
          title={
            <span>
              Connect me on <b className="text-white">X</b>(Twitter)
            </span>
          }
          toLink={"#"}
          toCopy={"@avi_mahajan"}
        />

        <ContactCard
          cardName="github"
          title={
            <span>
              Connect me on <b className="text-white">GitHub</b>
            </span>
          }
          toLink={"https://www.github.com/ItsKishnA"}
          toCopy={"ItsKishnA"}
        />

        <ContactCard
          cardName="gmail"
          title={
            <span>
              Write me a <b className="text-white">Mail</b>
            </span>
          }
          toLink={"#"}
          toCopy={"avi.knw@gmail.com"}
        />
      </div>
    );
  };

  const MessageMe = () => {
    return (
      // <div id="MESSAGE" className="flex flex-col flex-1 p-4">
      <div id="MESSAGE" className="w-full p-4 h-2/3 flex flex-col">
        <h2 className="text-3xl font-bold leading-loose">Drop a message</h2>
        <form className="flex flex-col flex-1">
          <div className="flex flex-col flex-1 md:flex-row">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 m-2 flex-1"
              required
            />
            <input
              type="text"
              placeholder="Last Name "
              className="p-2 m-2 flex-1"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="p-2 m-2 flex-1 text-gray-600 aligh-top"
            required
          />
          <textarea placeholder="Message" className="p-2 m-2 flex-1" required />
          <button type="submit" className="p-2 m-2">
            Send
          </button>
        </form>
      </div>
    );
  };

  const ContactPage = () => {
    return (
      <div className="flex flex-col md:flex-row w-full md:h-full">
        <div className="md:flex flex-[1] items-center p-4">
          <MessageMe />
        </div>
        <div className="flex-[1] p-4 flex justify-center">
          <ContactMe />
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen flex items-center">
      <SpeedInsights />
      {/* <About /> */}

      {/* <Projects /> */}
      <ContactPage />
    </main>
  );
}
