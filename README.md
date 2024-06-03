# 📝 very-simple-blog는 무엇인가요?

심플한 디자인의 블로그를 만들 수 있는 템플릿 프로젝트예요😉<br />
[Demo(개발자 블로그)](https://blog.sjoleee.info)

![image](https://github.com/sjoleee/very-simple-blog/assets/82137004/d3c48d76-98f0-4222-a8c7-e9882c791cb4)


<br />
<br />



# 👀 어떻게 사용하면 될까요?

## 1️⃣ 프로젝트 생성

[레포지토리 생성 링크](https://github.com/new?template_name=very-simple-blog&template_owner=sjoleee)를 눌러 템플릿이 적용된 레포지토리를 생성해 주세요.<br />
혹은, [레포지토리](https://github.com/sjoleee/very-simple-blog) 우측 상단의 `Use this template` 버튼을 눌러 `Create a new repository`를 선택해 주세요.

![image](https://github.com/sjoleee/very-simple-blog/assets/82137004/9eea8637-a288-4e1c-a745-9259000c7f98)


<br />
<br />


## 2️⃣ 프로젝트 환경 설정

### OS

해당 블로그는 Windows 환경에서 정상적으로 글 작성이 불가능합니다.

이유는 mdx로 작성한 글을 파싱해주는 **Contentlayer 라이브러리가 Windows에서 제대로 동작하지 않기 때문**인데요,<br />
[해당 토론](https://github.com/orgs/community/discussions/109713)에서 수동으로 해결하는 방법을 제시하고 있으므로 Windows 사용자 분들은 참고하시면 좋겠습니다!

<br />

### node version

해당 블로그는 **node v20 이상**의 환경에서 동작합니다.

<br />

### 의존성 설치

```bash
yarn install
```

yarn berry의 zero-install을 사용하고 있으나, 특정 조건 하에 일부 패키지는 압축 해제되어 `.yarn/unplugged` 폴더에 저장돼요.<br />
따라서 초기에 `yarn install`을 실행해 주셔야 합니다.

<br />

### 블로그 기본 정보 입력

```bash
yarn run init
```

커맨드를 실행하면 블로그에 필요한 기본 정보를 cli로 입력받아요.

![image](https://github.com/sjoleee/very-simple-blog/assets/82137004/6da05f5f-babe-458b-9cf2-98a7fbc078bf)

필요한 정보는 다음과 같습니다.

- 이름(닉네임)
- 마스코트 이모지
- 헤더 타이틀
- (선택) github URL
- (선택) resume URL
- (선택) 이 블로그가 사용할 domain
- (선택) 메타데이터 title
- (선택) 메타데이터 description


입력받은 내용은 `src/constants/data.ts` 경로의 `USER_INFORMATIONS` 객체에 주입됩니다. 필요하시면 해당 객체를 직접 수정해 주세요.

`github`나 `resume`는 블로그의 필수 구성 요소가 아니기 때문에 생략하셔도 괜찮아요.<br />
`blog domain`, `메타데이터` 항목은 사실 **필수 구성 요소**예요. cli 단계에서는 선택 항목을 스킵해도 괜찮습니다만, 추후 꼭! 입력해 주세요.


<br />
<br />


## 3️⃣ 글 작성하기

```bash
yarn run article
```

커맨드를 실행하면 글 작성에 필요한 기본 정보를 cli로 입력받아요.

![image](https://github.com/sjoleee/very-simple-blog/assets/82137004/b18314cb-cba8-43bf-b7c0-0721d5381c8e)

필요한 정보는 다음과 같습니다.

- 카테고리
- 제목
- slug
- (선택) 글에 대한 간단 설명
- (선택) 키워드
- 작성 일자

입력받은 내용은 `src/contents/posts/${카테고리}/${slug}.mdx` 경로의 최상단에 주입됩니다. 필요하시면 해당 마크다운을 직접 수정해 주세요.

`카테고리`, `제목`, `slug`, `작성 일자`는 글의 필수 구성 요소입니다.


이제 mdx파일에 원하는 내용을 입력하여 글을 완성하세요!<br />
썸네일의 경우, mdx파일 내에 작성된 안내를 참고해 주세요.


<br />
<br />


## 4️⃣ 댓글 기능 활성화하기

<img width="790" alt="image" src="https://github.com/sjoleee/very-simple-blog/assets/82137004/9b73cbb5-ecbc-4aa2-9529-1594eb8aa00c">


very-simple-blog는 giscus를 사용하여 댓글 기능을 구현했어요.
[https://github.com/giscus/giscus-component](https://github.com/giscus/giscus-component)

`src/components/Comments/index.tsx`에 수정이 필요한 항목을 수정하여 댓글 기능을 구현하세요!<br />
[https://giscus.app/ko](https://giscus.app/ko)의 단계를 따라하시면 쉽게 설정이 가능해요.


<br />
<br />


## 5️⃣ 공유 이미지 설정하기

`public/images/share.png`를 원하는 공유 이미지로 교체해 주세요.<br />
현재 이미지는 제 닉네임이 적혀있으니 꼭 교체해 주세요!


<br />
<br />


## 6️⃣ Vercel로 배포하기


Vercel은 클릭 몇 번으로 아주아주 편하게 프로젝트를 배포할 수 있는 배포, 호스팅 서비스에요.<br />
https://vercel.com/new 에서 github으로 로그인하신 후, 블로그 레포지토리를 선택하여 배포해주시면 됩니다!

<img width="1256" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/f0ab905d-5e62-4970-a681-dfa761781df9">


<br />
<br />


## 7️⃣ 커스터마이징

### 테마 변경(다크모드) 이미지 변경

현재 다크-라이트모드 변경 버튼에 삽입된 이미지는 제가 급하게 마우스로 직접 그린... 이미지에요😅<br />
~~나름 감성 있지 않나 생각이 들긴 하지만,~~ 원치 않으신다면 `public/images/dark.png` `public/images/light.png` 두 이미지를 수정하시면 됩니다!

제가 조금 더 정성껏 그린 이미지도 첨부하니 필요하시면 교체하여 사용해 주세요~!

![light2](https://github.com/sjoleee/very-simple-blog/assets/82137004/071f2747-b653-445f-8164-6389c66a5fe3)
![dark2](https://github.com/sjoleee/very-simple-blog/assets/82137004/6b795744-90dd-484c-9067-46619b8b763f)

<br />

### primary color 변경

현재 블로그의 primary color는 파란색(20 130 255)입니다. 다크모드에서는 조금 더 어두운 파란색이에요.<br />
primary color는 그리 많이 사용되지는 않으나, ScrollProgress, 각종 hover 효과, 썸네일의 fallback image 배경으로 사용됩니다.

색상을 변경하려면 `src/app/globals.css`의 l14, l22 두 군데를 수정해 주세요!
https://github.com/sjoleee/very-simple-blog/blob/70e19a0fb5a458bb66a41b996d2102c1ab37aaa7/src/app/globals.css#L9-L23


<br />
<br />



# contribute

기여는 언제든 환영입니다!

혹시나 ToC를 원하는 분들이 계실 것 같아 미리 첨언하자면... ToC 기능을 염두에 두고 미리 작업을 조금 해두었습니다만, 개인적으로 활용도가 크지 않아 구현하지 않았습니다.<br />
필요하신 분이 계시다면 기여해주세요~!
