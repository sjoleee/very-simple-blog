---
to: src/utils/scripts/overwrite_script.mjs
---

import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/constants/data.ts");
const fileContents = fs.readFileSync(filePath, 'utf8');

const newUserInfo = {
  headerTitle: "<%= headerTitle %>",
  userName: "<%= userName %>",
  mascot: "<%= mascot %>",
  resume: "<%= resume %>",
  github: "<%= github %>",
  domain: "<%= domain %>",
  meta: {
    title: "<%= metaTitle %>",
    description: "<%= metaDescription %>",
  },
};

const newUserInfoJson = JSON.stringify(newUserInfo, null, 2);
const updatedContents = fileContents.replace(
  /export const USER_INFORMATIONS = {[\s\S]*?};/,
  `export const USER_INFORMATIONS = ${newUserInfoJson};`,
);
fs.writeFileSync(filePath, updatedContents, "utf8");

console.log("USER_INFORMATIONS 객체가 업데이트되었습니다.");
console.log("optional 항목 중 작성하지 않은 항목이 있다면 꼭!! 추후 작성해 주세요😉");
console.log("src/constants/data.ts");
