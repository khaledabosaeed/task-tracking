import { ITask } from "../@types/main";

const fetchData = async (): Promise<ITask[]> => {
    const res = await fetch('https://dummyjson.com/todos', {
        method: 'GET'
    });
    const data = await res.json();
    return data.todos as ITask[];
}
export {
    fetchData
}
