namespace TrainDataResType {
  export type TrainDataType = {
    trainDataList: TrainDataListType;
    pageNo: number;
    totalPages: number;
  };

  export type TrainDataListType = ItemType[];

  export type ItemType = {
    id: string;
    title: string;
    type: string;
    supplyUnit: string;
    url: string;
    language: string;
    format: string;
    authorizeMethod: string;
    authorizeUrl: string;
    summary: string;
    dataDate: string;
    dataNum: number;
    dataSize: string;
    unitIntroduce: string;
    exampleData: string;
    fileItemList: {
      id: string;
      fileName: string;
    }[];
  };

  export type QueryType = {
    type?: string;
    length?: string;
  };
}

export default TrainDataResType;
