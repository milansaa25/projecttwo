import Card from "./Card";

import { Data } from "../../Data";
import DataModel from "./DataModal";
import { useState } from "react";
import { set } from "react-hook-form";

const Body = () => {
  const [users, setUSers] = useState(Data);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] =useState("");

  const onSubmit =(data) => {
    users [id].name =data.name;
    users [id].email =data.email;
    users [id].phone =data.phone;
    users [id].url =data.url;
    users [id].imgurl =data.imgurl;
    setShowModal(false);
    // console.log(Data);
  };
  const handShowModel = (status)=> {
    setShowModal(status);
  };
  const handleId = (id)=> {
    set(id);
  };
  return (
    <div className="flex gap-4 flex-wrap">
      {showModal ?(
        <DataModel handShowModel={handShowModel} onSubmit={onSubmit}/>
      ):(
        ""
      )}
      

      {users.map((val) => (
        <Card
        handleId={handleId}
        key={val.id}
        handShowModel={handShowModel}
         value={val} />
      ))}
    </div>
  );
};
export default Body;
