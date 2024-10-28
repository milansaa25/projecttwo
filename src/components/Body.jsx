import Card from "./Card";

import { Data } from "../../Data";
import DataModel from "./DataModal";

const Body = () => {
  const onSubmit =(Data) => {
    console.log(Data);
  };
  return (
    <div className="flex gap-4 flex-wrap">
      
      <DataModel onSubmit={onSubmit}/>

      {Data.map((val) => (
        <Card value={val} />
      ))}
    </div>
  );
};
export default Body;
