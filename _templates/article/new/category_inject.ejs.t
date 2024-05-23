---
to: src/constants/data.ts
inject: true
after: CATEGORY_ICONS
skip_if: <%= category %>
---

  <%= category %>: "<%= categoryIcon %>",