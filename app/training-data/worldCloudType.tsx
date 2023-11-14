namespace WorldCloudResType {
  export type WorldCloudType = {
    wordCloudList: WordCloudListType;
  };

  export type WordCloudListType = ItemType[];

  export type ItemType = {
    id: string;
    title: string;
    proportion: string;
  };
}

export default WorldCloudResType;
