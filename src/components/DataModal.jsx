import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
const DataModel = (props) => {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-white h-screen w-full fixed bg-opacity-65 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-fit w-[350px] border-2 bg-white p-4 flex flex-col gap-4"
      >
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold">Basic Model</h4>
          <p className="p-2">
            <ImCross />
          </p>
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Name:</p>
          <input className="border-2" type="text" {...register("name")} />
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Email:</p>
          <input className="border-2" type="email" {...register("email")} />
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Phone:</p>
          <input className="border-2" type="number" {...register("phone")} />
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Website:</p>
          <input className="border-2" type="url" {...register("website")} />
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Imageurl:</p>
          <input className="border-2" type="text" {...register("imageurl")} />
        </div>
        <button className="bg-blue-700 rounded-lg p-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default DataModel;
