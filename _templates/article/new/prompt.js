/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const NEW_CATEGORY_CHOICE = "새로운 카테고리 생성";
const TODAY = "오늘 날짜로";
const CUSTOM_DATE = "직접 작성";

const promptInput = async (prompter, config, validate) => {
  const response = await prompter.prompt(config);
  const key = Object.keys(response)[0];

  if (validate && !validate(response[key])) {
    console.log("잘못된 입력입니다. 다시 시도해 주세요.");
    return promptInput(prompter, config, validate);
  }

  return response[key];
};

const notEmpty = (input) => input.trim() !== "";

module.exports = {
  prompt: async ({ prompter, args }) => {
    const categoriesPath = path.join(process.cwd(), "src/content/posts");
    const categories = fs.readdirSync(categoriesPath).filter((file) => {
      return fs.statSync(path.join(categoriesPath, file)).isDirectory();
    });

    try {
      let { category } = await prompter.prompt({
        type: "select",
        name: "category",
        message: "작성할 글의 카테고리를 선택해 주세요",
        choices: [...categories, NEW_CATEGORY_CHOICE],
      });

      let categoryIcon;

      if (category === NEW_CATEGORY_CHOICE) {
        const newCategory = await promptInput(
          prompter,
          {
            type: "input",
            name: "newCategory",
            message: "새로운 카테고리를 생성하시는군요! 생성할 카테고리의 이름을 입력해 주세요",
          },
          notEmpty,
        );

        category = newCategory;

        const newCategoryIcon = await promptInput(
          prompter,
          {
            type: "input",
            name: "newCategoryIcon",
            message: "새로운 카테고리의 아이콘을 이모지 하나로 입력해 주세요",
          },
          notEmpty,
        );

        categoryIcon = newCategoryIcon;
      }

      const title = await promptInput(
        prompter,
        {
          type: "input",
          name: "title",
          message: "작성할 글의 제목을 입력해 주세요",
        },
        notEmpty,
      );

      const slug = await promptInput(
        prompter,
        {
          type: "input",
          name: "slug",
          message: "글의 URL에 사용될 slug를 입력해 주세요. ex) blog.com/posts/[slug]",
        },
        notEmpty,
      );

      const description = await promptInput(prompter, {
        type: "input",
        name: "description",
        message:
          "(optional) 어떤 글인지 간단한 설명을 입력해 주세요. 글 목록에서 제목과 함께 노출되는 설명이에요.",
      });

      const keywords = await promptInput(prompter, {
        type: "input",
        name: "keywords",
        message:
          "(optional) 글의 키워드를 원하는 만큼 입력해 주세요. 키워드는 ', '로 구분해 주세요.",
      });

      let { date } = await prompter.prompt({
        type: "select",
        name: "date",
        message: "작성 일자는 언제로 할까요?",
        choices: [TODAY, CUSTOM_DATE],
      });

      if (date === CUSTOM_DATE) {
        const customDate = await promptInput(
          prompter,
          {
            type: "input",
            name: "customDate",
            message: "글 작성 일자를 YYYY-MM-DD 형식으로 작성해 주세요",
          },
          (input) => /^\d{4}-\d{2}-\d{2}$/.test(input),
        );

        date = customDate;
      } else {
        date = new Date().toISOString().split("T")[0];
      }

      console.log(`🥳생성 완료!🥳 src/content/posts/${category}/${slug}.mdx 에서 글을 작성하세요!`);

      return {
        category,
        categoryIcon,
        title,
        description,
        keywords,
        date,
        slug,
        args,
      };
    } catch (error) {
      console.error(error.message);
    }
  },
};
