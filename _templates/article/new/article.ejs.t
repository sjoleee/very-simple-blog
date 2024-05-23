---
to: src/content/posts/<%= category %>/<%= slug %>.mdx
---
---
title: <%= title %>
description: <%= description %>
date: "<%= date %>"
keywords: [<%= keywords %>]
# thumbnail: "/images/posts/<%= category %>/<%= slug %>/thumbnail.png"
---


{/* ⚠️아래 안내는 글 발행 전 제거해주세요⚠️ */}

글에 사용되는 이미지는 public 폴더에 저장해 주세요.
**물론 cdn을 사용하셔도 무방합니다!**
thumbnail의 경우 LCP 점수를 위해 public 폴더에 저장하는 것을 추천드려요.

[이미지를 저장할 경로](/public/images/posts/<%= category %>/<%= slug %>)
{/* command를 누르고 click하시면 이동할 수 있습니다. */}

public 폴더에 저장된 이미지를 사용하실 경우, `![](/images/posts/<%= category %>/<%= slug %>/IMAGE_NAME.png)`처럼 사용해 주세요.

---