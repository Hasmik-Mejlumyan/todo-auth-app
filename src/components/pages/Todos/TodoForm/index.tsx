import {todoScheme} from "../../../../utils/schemes/todoScheme";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {ITodoData} from "../../../../types";
import {useAppDispatch, useAppSelector} from "../../../../store";
import {createTodo, selectIsLoading} from "../../../../store/todo";

const TodoForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<ITodoData>({
    resolver: yupResolver(todoScheme),
  })

  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectIsLoading);

  const onSubmit = (data: ITodoData) => {
    if (isLoading) {
      return;
    }

    dispatch(createTodo(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            {...register("title")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
          />
          <p className="text-red-500 text-xs italic">{errors.title?.message}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            {...register("description")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="Description"
          />
          <p className="text-red-500 text-xs italic">{errors.description?.message}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;