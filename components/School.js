import Image from "next/image";
import "./../app/globals.css";
import { Typography } from "./Typography";

const School = () => {
  return (
    <div className=" p-4 h-full flex flex-1 flex-col md:flex-row-reverse items-center content-center justify-center boxed gap-4">
      <div className="flex flex-[2] justify-center items-center">
        <img
          src="/images/sophia.jpg"
          alt="School"
          width={250}
          height={100}
          // layout="responsive"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-[3] flex-col">
        {/* <h3 className="font-bold text-lg flex flex-wrap">
          Sophia Convent Se. Sec. School
        </h3> */}
        <Typography variant="h4" className="font-bold">
          Sophia Convent Se. Sec. School
        </Typography>

        <div className="flex w-full justify-between">
          {/* <p className="font-mono text-gray-400">CBSE</p> */}
          <Typography variant="p" className="text-gray-400 font-mono">
            CBSE
          </Typography>

          {/* <h6 className="font-mono text-gray-600">2006-2021</h6> */}
          <Typography variant="p" className="text-gray-600 font-mono">
            2006-2021
          </Typography>
        </div>

        <div className="flex justify-center items-center">
          <table className="w-[75%]">
            <tbody>
              <tr>
                <td className="flex justify-center mr-2">X:</td>
                <td>89.4%</td>
                <td className="font-mono text-gray-600">[ 2019 ]</td>
              </tr>
              <tr>
                <td className="flex justify-center mr-2">XII:</td>
                <td>75.4%</td>
                <td className="font-mono text-gray-600">[ 2021 ]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default School;
