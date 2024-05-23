import fs from "fs";
import path from "path";

const directoryPath = path.join(process.cwd(), "src/content/posts");
const filenames = new Set();

const checkForDuplicates = (dirPath) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      checkForDuplicates(filePath);
      return;
    }

    if (filenames.has(file)) {
      throw new Error(
        `중복된 파일명이 존재합니다. 모든 글은 서로 다른 파일명(slug)을 가져야 합니다. 수정해주세요! : ${file}`,
      );
    }

    filenames.add(file);
  });
};

try {
  checkForDuplicates(directoryPath);
  console.log("중복된 파일명을 찾을 수 없습니다. 통과!");
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("알 수 없는 에러가 발생했어요.");
  }

  process.exit(1);
}
