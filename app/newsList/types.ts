namespace NewsResType {
  export type NewsListType = {
    issuePlanList: IssuePlanListType;
    pageNo: number;
    totalPages: number;
    firstLink: number;
  };

  export type IssuePlanListType = ItemType[];

  export type ItemType = {
    id: string;
    title: string;
    issueDate: string;
    type: string;
    dataSource?: string;
    relatedKeywordsArray?: string[];
    content?: string;
  };

  export type QueryType = {
    keyword?: string;
    page?: string;
  };
}

export default NewsResType;

// export type ItemType = {
//   id: string;
//   title: string;
//   issueDate: string;
// };
