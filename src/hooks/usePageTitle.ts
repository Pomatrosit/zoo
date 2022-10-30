import { useEffect } from "react";
import { PAGE_TITLE_PREFIX } from "../constants/common";

export const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `${PAGE_TITLE_PREFIX} | ${title}`;
  }, []);
};
