"use client";

import "@sjoleee/react-cmdk/dist/cmdk.css";

import { useState } from "react";

import { allPosts } from "contentlayer/generated";
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from "@sjoleee/react-cmdk";
import { MotionProps, m } from "framer-motion";

const Search = (props: MotionProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  useHandleOpenCommandPalette(setOpen);

  const filteredItems = filterItems(
    [
      {
        id: "blog",
        items: allPosts.map((post) => {
          const getKeywords = () => {
            if (post.description && post.keywords) {
              return [...post.keywords, post.description];
            }

            if (post.description) {
              return [post.description];
            }

            return post.keywords;
          };

          return {
            id: post._id,
            icon: "DocumentTextIcon",
            children: post.title,
            showType: false,
            keywords: getKeywords(),
            href: post.slug,
          };
        }),
      },
    ],
    search,
  );

  const handleSearchButtonClcik = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <m.button
        {...props}
        onClick={handleSearchButtonClcik}
        className="text-left w-full bg-backgroundLight pl-4 pr-6 py-2 rounded-md text-textColor/50 hover:text-textColor/80 hover:border-textColor/80 border-[0.5px] border-textColor/20 text-sm transition-all mr-4"
      >
        Search
      </m.button>
      <CommandPalette
        onChangeSearch={setSearch}
        onChangeOpen={setOpen}
        search={search}
        isOpen={open}
        page={"root"}
        panelClassName="bg-backgroundLight"
        dimmerClassName="bg-backgroundHeavy/50"
      >
        <CommandPalette.Page id="root">
          {filteredItems.length ? (
            filteredItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(filteredItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
        </CommandPalette.Page>
      </CommandPalette>
    </div>
  );
};

export default Search;
