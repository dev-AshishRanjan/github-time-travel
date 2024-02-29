// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import "../../backend/run.sh";
import { exec } from "child_process";
import path from "path";

type Data = {
  msg: string;
};

// Usage: $0 <username> <repo> <no._of_days> <past?:optoinal>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { username, repo, no_of_days, past } = req.body;

  // validate if all the params are present
  if (!username || !no_of_days || !past) {
    res.status(401).json({ msg: "provide all fields" });
  }

  // handling repo not provided
  if (repo === null || repo === undefined) {
    // exec command to create repo using github
  }

  exec(`bash /public/backend/run.sh ${username} ${repo} ${no_of_days} ${past}`, (error, stdout, stderr) => {
    if (error) {
      console.error("Got an Error : ", stderr);
      res.status(501).json({ msg: stderr });
    }
    console.log({ stdout });
    res.status(200).json({ msg: "Successfull" });
  });
}
