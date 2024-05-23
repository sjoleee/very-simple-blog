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
    try {
      const userName = await promptInput(
        prompter,
        {
          type: "input",
          name: "userName",
          message: "당신의 이름을 입력해 주세요👋",
        },
        notEmpty,
      );

      const mascot = await promptInput(
        prompter,
        {
          type: "input",
          name: "mascot",
          message: "당신을 잘 드러내는 이모지를 하나 입력해 주세요🥰",
        },
        notEmpty,
      );

      const headerTitle = await promptInput(prompter, {
        type: "input",
        name: "headerTitle",
        message:
          "블로그의 Header에 사용될 title을 짧게 적어 주세요. 10자 이내의 한 단어를 추천드려요😉",
        notEmpty,
      });

      const github = await promptInput(prompter, {
        type: "input",
        name: "github",
        message: "(optional) 당신의 github URL을 알려 주세요. ex) https://github.com/sjoleee",
      });

      const resume = await promptInput(prompter, {
        type: "input",
        name: "resume",
        message: "(optional) 당신의 resume URL을 알려 주세요. ex) https://www.sjoleee.info",
      });

      const domain = await promptInput(prompter, {
        type: "input",
        name: "domain",
        message: "(optional) 이 블로그가 사용할 URL을 입력해 주세요. ex) https://blog.sjoleee.info",
      });

      const metaTitle = await promptInput(prompter, {
        type: "input",
        name: "metaTitle",
        message:
          "(optional) 블로그 메타데이터 title로 사용될 문구를 알려주세요. ex) sjoleee 개발 블로그",
      });

      const metaDescription = await promptInput(prompter, {
        type: "input",
        name: "metaDescription",
        message:
          "(optional) 블로그 메타데이터 description으로 사용될 문구를 알려주세요. ex) 프론트엔드 개발자 이상조의 개발 블로그입니다",
      });

      return {
        userName,
        mascot,
        headerTitle,
        github,
        resume,
        domain,
        metaTitle,
        metaDescription,
        args,
      };
    } catch (error) {
      console.error(error.message);
    }
  },
};
