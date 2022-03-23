import { changePage } from "../../store/Employee/EmployeeSlice";
import { useAppDispatch } from "../../store/hooks";

export const PagePicker = (props: {
  currentPage: number;
  totalPages: number;
}) => {
  const { currentPage, totalPages } = props;
  const dispatch = useAppDispatch();
  const changePageHandler = (newPage: number) => (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(changePage(newPage));
  };

  return (
    <div>
      <button onClick={changePageHandler(0)}>{"<<"}</button>
      {range(currentPage - 2, currentPage + 2).map((page: number) => {
        if (page === currentPage) return page + 1;
        if (page >= 0 && page < totalPages)
          return (
            <button onClick={changePageHandler(page)} key={page}>
              {page + 1}
            </button>
          );
      })}
      <button onClick={changePageHandler(totalPages - 1)}>{">>"}</button>
    </div>
  );
};

const range = (start: number, end: number) =>
  Array.from(Array(1 + end - start).keys()).map((item) => item + start);
